const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();

const vehicle = require('./server/controller/VehicleController')
const connectDB = require('./server/db/Connection');
dotenv.config({path:'config.env'})

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/upload/images', express.static('upload/images'));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});



// app.get('/',(req, res)=>{
//
//     res.send("Vehicle store ");
//
// })



app.use('/api/vehicle',vehicle);

connectDB();
app.listen(3000, ()=>{console.log(`Server is running on http://localhost:${3000}`)});

