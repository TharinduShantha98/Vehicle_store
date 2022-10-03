const  mongoose = require("mongoose");

let schema = new mongoose.Schema({


    vehicleNumber:String,
    vehicleType: String,
    venue: String,
    price:String,
    mileage:String,
    image:{
        type: String,
        require:true

    }




})
const vehicle = mongoose.model('post',schema)
module.exports = vehicle
