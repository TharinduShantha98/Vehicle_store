const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser')
<<<<<<< HEAD

=======
>>>>>>> 49d070e5a28f40cc59fe34f673e87b84ec7e7c9e
const app = express();



const connectDB = require('./server/db/Connection');

app.get('/',(req, res)=>{

    res.send("Vehicle store ");

})


app.listen(3000, ()=>{console.log(`Server is running on http://localhost:${3000}`)});

