const {Router} = require("express");
const router = Router();
const ProductController = require("../controllers/AdminPanel/product.controller")

// Product Router
router.get("/", ProductController.getProducts)
router.get("/:id", ProductController.getProduct)
router.post("/", ProductController.createProduct)
router.put("/:id", ProductController.updateProduct)
router.patch("/status/:id", ProductController.updateStatus)
router.delete("/:id", ProductController.deleteProduct)



module.exports = router;