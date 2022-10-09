const mongoose = require("mongoose")


let schema = new mongoose.Schema({

    userName:String,
    EmailAddress:String,
    password:String,
    conformPassword:String,





})


const user = mongoose.model("user", schema);
module.exports = user;
