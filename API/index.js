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


app.get('/',(req, res)=>{

    res.send("Vehicle store ");

})



app.use('/api/vehicle',vehicle);

connectDB();
app.listen(3000, ()=>{console.log(`Server is running on http://localhost:${3000}`)});

