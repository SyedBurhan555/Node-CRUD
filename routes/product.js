const router = require("express").Router();
const productContollers = require("../controllers/productControllers");


router.get('/',productContollers.product_all)
router.post('/')
router.put('/:productId')
router.delete('/:productId')
router.get('/:productId')

module.exports = router