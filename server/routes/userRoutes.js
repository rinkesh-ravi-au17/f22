const express = require ('express')
const { getAllUsers, addUser } = require('../controller/userController')

const router = express.Router()

router.route("/users").get(getAllUsers)
router.route("/user/add").post(addUser)

module.exports = router