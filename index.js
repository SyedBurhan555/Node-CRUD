const express = require('express');
const app = express();
const PORT =  8000;
const dotenv = require("dotenv");
const productRoutes = require('./routes/product');

dotenv.config({path:'./config.env'});
require('./db/conn')

app.use('/api/product',productRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})



