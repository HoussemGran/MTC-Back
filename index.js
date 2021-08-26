
const express = require("express");
const path = require("path");
require("body-parser")
require("./connection");
const studentRoute = require('./routes/newStudentRoute')
const authRoute = require('./routes/studentAuthRoute')

// initialise app
const app = express();

// views config
app.set("views",path.join(__dirname,"views"))
app.set("view engine",'ejs');

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