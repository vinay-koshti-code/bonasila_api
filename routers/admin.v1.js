const {Router} = require("express");
const router = Router();
const ProductController = require("../controllers/AdminPanel/product.controller");
const ProductSizeController = require("../controllers/AdminPanel/productSize.controller");
const ProductPriceController = require("../controllers/AdminPanel/productPrice.controller");
const ProductFinishTypeController = require("../controllers/AdminPanel/finishesType.controller");
const ProductFinishesController = require("../controllers/AdminPanel/finishesType.controller");
const ProductCollectionController = require("../controllers/AdminPanel/productCollection.controller")
const ProductMediaController = require("../controllers/AdminPanel/productMedia.controller")

const validation = require("../validators/index");
const upload = require("../middlewares/upload.middleware");
const {createProductSchema, updateProductSchema} = require("../validators/product.validator");
const { createProductSizeSchema, updateProductSizeSchema } = require("../validators/productSize.validator");
const { createProductPriceSchema, updateProductPriceSchema } = require("../validators/productPrice.validator");
const {createProductFinishTypeSchema, updateProductFinishTypeSchema} = require("../validators/FinishesType.validator");
const {createProductFinishesSchema, updateProductFinishesSchema} = require("../validators/FinishesType.validator");
const {createProductCollectionSchema, updateProductCollectionSchema} = require("../validators/ProductCollection.validator");
const {createProductMediaSchema, updateProductMediaSchema} = require("../validators/productMedia.validator");    
const { dynamicRequestValidator } = require("../validators/Contact.validator");
const ContactController = require("../controllers/AdminPanel/Contact.controller");
const metaContentController = require("../controllers/AdminPanel/metaContent.controller");
const { createMetaContentSchema, updateMetaContentSchema } = require("../validators/MetaContent.validator");

// Product Router
router.get("/products/", ProductController.getProducts)
router.get("/products/:id", ProductController.getProduct)
router.post("/products/", upload.productImages, validation(createProductSchema), ProductController.createProduct)
router.put("/products/:id", upload.productImages, validation(updateProductSchema), ProductController.updateProduct)
router.patch("/products/status/:id", ProductController.updateStatus)
router.delete("/products/:id", ProductController.deleteProduct)

router.get("/product-sizes/", ProductSizeController.getProductSizes);
router.get("/product-sizes/dropdownforproduct", ProductSizeController.getDropDownForProduct);
router.get("/product-sizes/:id", ProductSizeController.getProductSize);
router.post("/product-sizes/", validation(createProductSizeSchema), ProductSizeController.createProductSize);
router.put("/product-sizes/:id", validation(updateProductSizeSchema), ProductSizeController.updateProductSize);
router.patch("/product-sizes/status/:id", ProductSizeController.updateStatus);
router.delete("/product-sizes/:id", ProductSizeController.deleteProductSize);

router.get("/product-price/:id", ProductPriceController.getProductPrice);
router.post("/product-price/", validation(createProductPriceSchema), ProductPriceController.createProductPrice);
router.put("/product-price/:id", validation(updateProductPriceSchema), ProductPriceController.updateProductPrice);
router.delete("/product-price/:id", ProductPriceController.deleteProductPrice);


router.get("/finish-type/", ProductFinishTypeController.getProductFinishTypes);
router.get("/finish-type/:id", ProductFinishTypeController.getProductFinishType);
router.post("/finish-type/", upload.finishTypeMedia, validation(createProductFinishTypeSchema), ProductFinishTypeController.createProductFinishType);
router.put("/finish-type/:id", upload.finishTypeMedia, validation(updateProductFinishTypeSchema), ProductFinishTypeController.updateProductFinishType);
router.patch("/finish-type/status/:id", ProductFinishTypeController.updateStatus);
router.delete("/finish-type/:id", ProductFinishTypeController.deleteProductFinishType);


router.get("/product-finishes/", ProductFinishesController.getProductFinishTypes);
router.get("/product-finishes/:id", ProductFinishesController.getProductFinishType);
router.post("/product-finishes/", upload.finishImage, validation(createProductFinishesSchema), ProductFinishesController.createProductFinishType);
router.put("/product-finishes/:id", upload.finishImage, validation(updateProductFinishesSchema), ProductFinishesController.updateProductFinishType);
router.patch("/product-finishes/status/:id", ProductFinishesController.updateStatus);
router.delete("/product-finishes/:id", ProductFinishesController.deleteProductFinishType);


router.get("/product-collections/", ProductCollectionController.getProductCollections);
router.get("/product-collections/dropdownforproduct", ProductCollectionController.getDropDownForProduct);
router.get("/product-collections/:id", ProductCollectionController.getProductCollection);
router.post("/product-collections/", upload.collectionImages, validation(createProductCollectionSchema), ProductCollectionController.createProductCollection);
router.put("/product-collections/:id", upload.collectionImages, validation(updateProductCollectionSchema), ProductCollectionController.updateProductCollection);
router.patch("/product-collections/status/:id", ProductCollectionController.updateStatus);
router.delete("/product-collections/:id", ProductCollectionController.deleteProductCollection);

// router.get("/product-media/", ProductMediaController.getProductMediaList);
router.get("/product-media/:product_id", ProductMediaController.getProductMedia);
router.post("/product-media/", upload.productMedia, validation(createProductMediaSchema), ProductMediaController.createProductMedia);
router.put("/product-media/:id", upload.productMedia, validation(updateProductMediaSchema), ProductMediaController.updateProductMedia);
router.patch("/product-media/status/:id", ProductMediaController.updateStatus);
router.delete("/product-media/:id", ProductMediaController.deleteProductMedia);



// router.post("/contact", dynamicRequestValidator, ContactController.createRequest);
router.get("/contact", ContactController.getRequests);
router.get("/contact/:id", ContactController.getRequest);
// router.put("/contact/:id", dynamicRequestValidator, ContactController.updateRequest);
router.patch("/contact/status/:id", ContactController.updateStatus);
router.delete("/contact/:id", ContactController.deleteRequest);



// Public routes (for front-end to fetch)
router.get("/meta/", metaContentController.getMetaContents);
router.get("/meta/:id", metaContentController.getMetaContentById);
// router.get("/slug/:slug", metaContentController.getMetaContentBySlug);

// Authenticated/Protected routes
router.post("/meta/", validation(createMetaContentSchema), metaContentController.createMetaContent);
router.put("/meta/:id", validation(updateMetaContentSchema), metaContentController.updateMetaContent);
router.patch("/meta/status/:id", metaContentController.updateStatus);


module.exports = router;