const express=require('express');
const bcrypt=require("bcrypt");
require('dotenv').config()
const {Model1}=require("../data_base/data_base.js")

const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}))

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

module.exports=router