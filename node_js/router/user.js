const express=require('express');
const path=require("path");
const cors=require('cors')
let jwt=require('jsonwebtoken');
const bcrypt=require("bcrypt");
require('dotenv').config()
const multer=require("multer")
const cookieParser = require('cookie-parser');
const {Model1, Model2}=require("../data_base/data_base.js");
const MulterGridfsStorage = require('multer-gridfs-storage');

const router=express.Router();

router.use(cors())

router.use(cookieParser());

router.use(express.json());
router.use(express.urlencoded({extended:false}))

let tmp_token=0

//multer storage
let storage=new MulterGridfsStorage.GridFsStorage({
    url: process.env.Db_URL + process.env.Data_Base,
    file: function(req,file){
          return{
            bucketName:"survey_img",
            fileName:`${Date.now()}_${file.originalname}`
          }
    }
})

let upload=multer({storage:storage})

//checking token 

async function verifyToken(req,res,next){
    let get_token=await req.cookies?.uid;
    console.log(`token is ${get_token}`);
    if(!get_token)
    {
        res.redirect("/login")
    }
    else
    {
        await jwt.verify(get_token, process.env.secret_key, (error,valid)=>{
            if(error){
                res.redirect("/login")
            }
            else{
                next();
            }
        })
    }
    
}

router.get("/",(req,res)=>{
    res.send("Hello World")
})

//sending theme style

router.get("/theme",(req,res)=>{
    try 
    {
        let style=["italic","normal","oblique"]
        // res.send(JSON.stringify(style))
        res.send(style)
    } 
    catch (error) 
    {
        res.send(error)
    }
})

router.get("/logout",verifyToken,async (req,res)=>{
    try 
    { 
        res.clearCookie("uid");
        res.redirect("/login")
    } 
    catch (error) 
    {
        res.redirect("/login")
    }
})

router.post("/register",async (req,res)=>{
    // console.log(req.body);
    try 
    {
        // console.log(req.body);
        let {name,email,phone,profession,password}=req.body;
        const token=await jwt.sign({use:email},process.env.secret_key)
        tmp_token=token;
            let pass=await bcrypt.hash(password,10)
            console.log(pass);
            let doc1=await new Model1({
               name:name,
               email:email,
               phone:phone,
               profession:profession,
               password:pass,
               token:token
            })
            await doc1.save();
            res.send("data received")            
    } 
    catch (error) 
    {
        res.send(error)
    }
})

router.post("/login",async (req,res)=>{
    try 
    {
        let {email,password}=req.body;
        let data=await Model1.findOne({email:email})
        if(data)
        {

            let match=await bcrypt.compare(password,data.password)
            if(match)
            {
                // const token=await jwt.sign({use:email},process.env.secret_key)

                // res.cookie("react",token,{
                //     expires:new Date(Date.now()+90 * 24*60*60*1000),
                //     // secure:true,
                //     domain:"http://localhost:3000",
                //     httpOnly:true
                // })

                res.json(data.token)
            }
            else
            {
                res.json('incorrect password')
            }
        }
        else
        {
            res.json("not registered")
        }
      
    } 
    catch (error) 
    {
        res.send(error)
    }
})

router.post("/survey_data", upload.single("image"),(req,res)=>{
    
    // console.log(req.body);    
    try 
    {
        // console.log(req.body);  
        let Boolean=req.cookies.uid
        console.log(Boolean);

        let {name,description,typeOfSurvey,startDate,endDate,otherCriteria,imageName,questions,token}=req.body;
        let doc2=new Model2({
            name:name,
            description:description,
            typeOfSurvey:typeOfSurvey,
            startDate:startDate,
            endDate:endDate,
            otherCriteria:otherCriteria,
            imageName:imageName,
            questions:questions,
            token:token
        })
        // console.log(doc2);
        doc2.save()
        .then(()=>{
            res.status(200).send({result: doc2})
        })
        .catch(err=> res.status(500).send({message: "something went wrong"}))
    } 
    catch (error) 
    {
        res.send(error)
    }
})

router.post('/get-surveys',async (req,res)=>{
    await Model2.find({token:req.body.token})
    .then((surveys)=>{
        if(!surveys){
            res.status(404).sendStatus({message: "No surveys are available"})
        }
        else{
            res.status(200).send(surveys)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "something went wrong"})
    })
})

// router.get('/get-surveys',async(req, res)=>{
//     // console.log(req.body);
//      await Model2.find({token:tmp_token})
//     .then((surveys)=>{
//         if(!surveys){
//             res.status(404).sendStatus({message: "No surveys are available"})
//         }
//         else{
//             res.status(200).send(surveys)
//         }
//     })
//     .catch(err=>{
//         res.status(500).send({message: "something went wrong"})
//     })

    
// })



router.post('/delete_survey', async (req,res)=>{
    console.log(req.body._id);
    await Model2.findByIdAndDelete(req.body._id)
})


module.exports=router