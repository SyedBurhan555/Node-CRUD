const router = require("express").Router();
const productControllers = require("../controllers/productControllers");

router.get("/", productControllers.product_all);
router.post("/", productControllers.add_Product);
router.put("/:productId", productControllers.update_product);
router.delete("/:productId", productControllers.delete_product);
router.get("/:productId", productControllers.single_product_data);

module.exports = router;
