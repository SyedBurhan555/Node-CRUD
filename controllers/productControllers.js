const product = require('../model/Product');


// get all Product
const product_all = async (req,res)=>{
    try{
        const getProduct = await product.find()
        res.json(getProduct)
    }
    catch(error){
        res.json({message:error})
    }
}


module.exports = {product_all}