const mongoose=require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.Db_URL + process.env.Data_Base)
.then(()=>console.log("connected to database"))
.catch(()=>console.log("connection error"))

let Schema1=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    profession:{type:String},
    password:{type:String}
})

let Model1=mongoose.model("storage",Schema1);

module.exports={Model1}