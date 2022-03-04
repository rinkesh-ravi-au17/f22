const app = require ('./app')
const dotenv =require('dotenv')
const connectDB = require ('./config/databse')

//config
dotenv.config({path:"server/config/config.env"})
// connecting to databse
connectDB()

app.listen (process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})



