
const express = require("express");
const path = require("path");
const cors = require('cors');
require("body-parser")
require("./connection");
const studentRoute = require('./routes/newStudentRoute')
const authRoute = require('./routes/studentAuthRoute')

// initialise app
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// body-parser config
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



app.get('/',function(req,res){
    res.render("home");
})


app.use('/login',authRoute)
app.use('/student',studentRoute)



app.listen(3000,()=>{
    console.log('Server listen on port 3000')
})