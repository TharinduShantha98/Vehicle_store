
const express = require('express');
const router = express.Router();
const multer = require('multer');


let UserModel = require('../model/UserModel');

const upload = multer({


})





router.post('/',upload.single('image'),(req, res, next)=>{

    console.log("hello");
    console.log(req.body.username);
    const newUser = new UserModel({
        userName: req.body.username,
        EmailAddress:req.body.EmailAddress,
        password:req.body.password,
        conformPassword:req.body.conformPassword,


    })



    newUser
        .save()
        .then(result =>{
            res.status(200).json({
                message: "user account create  successfully",
            })
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })



})

module.exports =router
