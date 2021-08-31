

const studentModel = require('../model/newStudentModel')


exports.addStudent = (req,res)=>{
    console.log(req.body)
    const newStudent = new studentModel({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        password : req.body.password,
        email : req.body.email,
        phone : req.body.phone,
        option :req.body.option
    })

    console.log(newStudent)

    studentModel.find({email:req.body.email})
    .then(data=>{
        if(data.length > 0){
            return res.send('existe')
        }else{
    newStudent.save()
    .then(data=>{
        
        return res.send(data)
    })
    .catch(err=>{
        console.log(err)
       return  res.send(err)
    })
    }


    })

    
}


exports.getStudents = (req,res)=>{

    studentModel.find()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.getOneStudent = (req,res)=>{
    const id = req.params.id
    studentModel.findById(id)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.removeStudent = (req,res)=>{
    const id = req.params.id
    studentModel.findByIdAndRemove(id)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
}
