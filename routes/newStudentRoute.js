
const express = require("express");
const router = express.Router();
const studentController = require('../controller/newStudentController')


router.post('/',studentController.addStudent)
router.get('/',studentController.getStudents)
router.get('/:id',studentController.getOneStudent)
router.delete('/:id',studentController.removeStudent)
//router.patch('')

module.exports = router