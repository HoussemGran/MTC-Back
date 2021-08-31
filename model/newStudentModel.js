

const mongoose = require("mongoose");

const newStudent = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:false
    },

    
    
    option:{
        type:String,
        required:false
    },



});


module.exports = mongoose.model("NewStudent",newStudent);