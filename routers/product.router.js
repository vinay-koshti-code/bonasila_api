// const express = require("express");
// const router = express.Router();
// const ProductController = require("../controllers/AdminPanel/product.controller");
// const validate = require("../validators/index");
// const { createProductSchema, updateProductSchema } = require("../validators/product.validator");

// // Public routes
// router.get("/", ProductController.getProducts);
// router.get("/:id", ProductController.getProduct);

// // Authenticated/Protected routes
// router.post("/", validate(createProductSchema), ProductController.createProduct);
// router.put("/:id", validate(updateProductSchema), ProductController.updateProduct);
// router.patch("/status/:id", ProductController.updateStatus);
// router.delete("/:id", ProductController.deleteProduct);

// module.exports = router;