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
router.use(express.urlencoded({extended:true}))

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


router.post("/register",async (req,res)=>{
    try 
    {
        // console.log(req.body);
        let {name,email,phone,profession,password,confirm_password}=req.body;
        if(password===confirm_password)
        {
            let pass=await bcrypt.hash(password,10)
            console.log(pass);
            let doc1=await new Model1({
               name:name,
               email:email,
               phone:phone,
               profession:profession,
               password:pass
            })
            await doc1.save();
            res.send("data received")
            
        }
        else
        {
            res.send("password does not match")
        }
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
                let token=await jwt.sign({use:email},process.env.secret_key)
                await res.cookie("uid",token)
                res.send("login successfully")
            }
            else
            {
                res.send("incorrect password")
            }
        }
        else
        {
            res.send("not registered")
        }
      
    } 
    catch (error) 
    {
        res.send(error)
    }
})

router.post("/survey_data",verifyToken,upload.single("image"),(req,res)=>{
    try 
    {
        console.log(req.body);
        let {name,description,typeOfSurvey,startDate,endDate,otherCriteria,imageName}=req.body;
        let doc2=new Model2({
            name:name,
            description:description,
            typeOfSurvey:typeOfSurvey,
            startDate:startDate,
            endDate:endDate,
            otherCriteria:otherCriteria,
            imageName:req.file.filename
        })
        doc2.save();
    } 
    catch (error) 
    {
        res.send(error)
    }
})

module.exports=router