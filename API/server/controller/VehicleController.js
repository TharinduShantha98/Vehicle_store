const express = require('express');
const router = express.Router();
const multer = require('multer');


let VehicleModel = require('../model/VehicleModel');


//store
const Storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload/images/');
    },
    filename:(req,file, cb)=>{
        cb(null, "Vehicle" + file.originalname);


    }
});


const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage:Storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter

})



router.post('/',upload.single('image'), (req,res,next)=>{



    const newVehicleModel = new VehicleModel({
                vehicleNumber: req.body.vehicleNumber,
                vehicleType: req.body.vehicleType,
                venue: req.body.venue,
                price: req.body.price,
                mileage: req.body.mileage,
                image:req.image
    });

    console.log(req.image)




   console.log(req.file);

    newVehicleModel
        .save()
        .then(result =>{
            console.log(result);
            res.status(200).json({
                    message: "vehicle successfully",
            })

        })
        .catch((err)=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })


})



router.get('/',(req,res,next)=>{
    VehicleModel.find()
        .select("vehicleNumber vehicleType venue price  mileage image _id")
        .exec()
        .then(docs =>{
            const  response ={
                count: docs.length,
                vehicles: docs.map(doc =>{
                    return {
                        vehicleNumber: doc.vehicleNumber,
                        vehicleType:doc.vehicleType,
                        venue: doc.venue,
                        price: doc.price,
                        mileage: doc.mileage,
                        image: doc.image,
                        request:{
                            type:"GET",
                            url:"http://192.168.8.101:3000/upload/images/Vehicle"+doc.image
                        }

                    }
                })


            }


            res.status(200).json(response);


        })

        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            })
        })




})


router.delete("/vehicleId",(req,res,next)=>{

    const  id = req.params.vehicleId;

    VehicleModel.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send(
                    {
                        message: `cannot Delete with id${id}. maybe is wrong`
                    })
            }else{
                res.send({
                    message:"user was deleted successfully"
                })
            }

        })







})







module.exports = router
