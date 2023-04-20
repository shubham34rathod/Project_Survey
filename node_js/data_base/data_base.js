const mongoose=require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.Db_URL + process.env.Data_Base ,{useNewUrlParser: true})
.then(()=>console.log("connected to database"))
.catch(()=>console.log("connection error"))

//registration schema...........

let Schema1=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    profession:{type:String},
    password:{type:String}
})

let Model1=mongoose.model("storage",Schema1);

//Survey data schema............

let Schema2=new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    typeOfSurvey:{type:String},
    startDate:{type:String},
    endDate:{type:String},
    otherCriteria:{type:String},
    imageName:{type:String}
})

let Model2=mongoose.model("survey_data",Schema2)


module.exports={Model1,Model2}