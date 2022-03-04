const express = require ('express')
const { addSalonUser } = require('../controller/salonController')
const router = express.Router()

router.route("salonuser/add").post(addSalonUser)

module.exports = router