const {Router} = require("express");
const router = Router();
const validator = require("../validators/index")
const { dynamicRequestValidator } = require("../validators/Contact.validator");
const ContactController = require("../controllers/WebAPI/Contact.Controller.js");
const metaContentController = require("../controllers/WebAPI/MetaContent.controller.js");
// const ProductController = require("../controllers/AdminPanel/product.controller")
// const ContactController = require("../controllers/WebAPI/Contact.controller.js")

// Product Router
// router.get("/", ProductController.getProducts)

// Contact Request Router
router.post("/contact/", dynamicRequestValidator,ContactController.createRequest);


// Meta Content Router
router.get("/meta/slug/:slug", metaContentController.getMetaContentBySlug);


module.exports = router;