
const express = require('express')
const router = express.Router()
const authController = require('../controller/studentAuthController')

router.post('/',authController.login)


module.exports = router;