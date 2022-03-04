const express = require ('express')
const app = express()

app.use(express.json())

//route imports
const user = require ('./routes/userRoutes')
const salonuser = require('./routes/salonRoute')

app.use ("/api/v1",user)
app.use ("/api/v1/salon",salonuser)


module.exports = app