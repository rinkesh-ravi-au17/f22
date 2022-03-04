const mongoose = require ('mongoose')
const salonUserSchema = mongoose.Schema({
    companyname:{
        type: String,
        required :[true,"Please enter your company name"]
    },
    gstin:{
        type:String,
        required:[true,"please enter your GSTIN"]
    },
    panNumber:{
        type:String,
        required :[true,"please enter your pan number"]
    },
    address:{
        type:Number,
        required:[true,"please enter your adress"]
    },
    workschedule:{
        type :String,
        required:[true,"please enter your working schedule"]

    },
    serviceProvided:{
        type :String,
        required:[true,"please enter the services provided by you"]

    },

})