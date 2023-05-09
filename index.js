const express = require('express');
const app = express();
const PORT =  8000;
const dotenv = require("dotenv");

dotenv.config({path:'./config.env'});
require('./db/conn')


app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})



