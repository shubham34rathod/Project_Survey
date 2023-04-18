const express=require('express');
require('dotenv').config()
const router=require("./router/user.js")

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(router)
// console.log(process.env);

app.listen(8000,()=>console.log("connected to 8000 port"))