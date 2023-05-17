const product = require("../model/Product");

// get all Product
const product_all = async (req, res) => {
  try {
    const getProduct = await product.find();
    res.json(getProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

// get single Product data

const single_product_data = async (req, res) => {
  try {
    const getSingleData = await product.findById(req.params.productId);
    await res.json(getSingleData);
  } catch (error) {
    console.log({ message: error });
  }
};

// add Product

const add_Product = async (req, res) => {
  const addProduct = new product({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    details: req.body.details,
  });
  try {
    const savedProduct = await addProduct.save();
    res.send(savedProduct);
  } catch (error) {
    console.log({ message: error });
  }
};

// Update Product data

const update_product = async (req, res) => {
  try {
    const existingProduct = {
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      details: req.body.details,
    };
    const updatedProduct = await product.findByIdAndUpdate(
      { _id: req.params.productId },
      existingProduct
    );
    res.send(updatedProduct);
  } catch (error) {
    console.log({ message: error });
  }
};

// delete Product

const delete_product = async (req, res) => {
  try {
    const removeProduct = await product.findByIdAndDelete(req.params.productId);
    res.json(removeProduct);
  } catch (error) {
    console.log({ message: error });
  }
};

module.exports = {
  product_all,
  single_product_data,
  add_Product,
  update_product,
  delete_product,
};
