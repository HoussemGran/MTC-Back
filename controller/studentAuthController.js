
const studentModel = require('../model/newStudentModel')

exports.login = (req,res)=>{

    const email = req.body.email;
    const password = req.body.password

    studentModel.findOne({email:email,password:password})
    .then(data=>{
        if(data){
            localStorage.setItem('login',email)
            res.render('student',{name:data.firstName})
        }else{
            res.render('login',{error:'User not found check!!'})
        }
        
    })
}

exports.logout = (req,res)=>{
    localStorage.clear()
    res.render("home")
}
