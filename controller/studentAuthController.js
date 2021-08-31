
const studentModel = require('../model/newStudentModel')

exports.login = (req,res)=>{

    const email = req.body.email;
    const password = req.body.password

    studentModel.findOne({email:email,password:password})
    .then(data=>{

        if(data) return res.send(data)
        else return res.send("failed")
        
        
    }).catch(error=>{
        res.send(error)
    })
}

exports.logout = (req,res)=>{
    
}
