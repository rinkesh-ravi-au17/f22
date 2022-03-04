const mongoose = require ('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required :[true,"Please enter your name"]
    },
    age:{
        type:Number,
        required:[true,"please enter your age"]
    },
    email:{
        type:String,
        required :[true,"please enter your email"]
    },
    contactNo:{
        type:Number,
        required:[true,"please enter your contact number"]
    },
})