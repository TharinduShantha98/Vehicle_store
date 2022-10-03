const express = require('express');
const router = express.Router();
const multer = require('multer');


let VehicleModel = require('../model/VehicleModel');


//store
const Storage = multer.diskStorage({
    destination:'D:/ReactNative CW/API/upload/images',
    filename:(req,file, cb)=>{
        console.log(file.originalname);
        cb(null, file.originalname);

    }
});

const upload = multer({
    storage:Storage
}).single('image')


router.post('/',(req,res)=>{

    console.log(req.body);


    upload(req,res,(err)=> {
        if (err) {
            console.log(err);
        } else {
            const newVehicleModel = new VehicleModel({
                vehicleNumber: req.body.vehicleNumber,
                vehicleType: req.body.vehicleType,
                venue: req.body.venue,
                price: req.body.price,
                mileage: req.body.mileage,
                image: {
                    data: req.file.filename,
                    contentType: 'image/png'
                }

            })

            newVehicleModel
                .save()
                .then(() => {
                    res.send("post upload successfully");
                }).catch((err) => {
                res.send("not successFully");

            })

        }
    })

})


module.exports = router
