const mongoose = require("mongoose");

const enquiryNowSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
         unique:true
      
    
    },
    number:{
        type:Number,
        required:true,
        unique:true,
        match:/^[0-9]{10}$/,
    },
    gender:{
       type:String,
       required:true,
    },
    course:{
        type:String,
        required:true,

    },
    message:{
       type:String
    }
})

module.exports = mongoose.model("enquiryNow", enquiryNowSchema)