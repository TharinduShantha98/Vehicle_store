const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();

app.get('/',(req, res)=>{

    res.send("Vehicle store ");

})


app.listen(3000, ()=>{console.log(`Server is running on http://localhost:${3000}`)});

