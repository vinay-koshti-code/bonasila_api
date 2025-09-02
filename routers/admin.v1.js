const {Router} = require("express");
const router = Router();
const ProductController = require("../controllers/AdminPanel/product.controller");
const ProductSizeController = require("../controllers/AdminPanel/productSize.controller");
const ProductPriceController = require("../controllers/AdminPanel/productPrice.controller");
const ProductFinishTypeController = require("../controllers/AdminPanel/finishesType.controller");
const ProductFinishesController = require("../controllers/AdminPanel/productFinishes.controller");
const ProductCollectionController = require("../controllers/AdminPanel/productCollection.controller")
const ProductMediaController = require("../controllers/AdminPanel/productMedia.controller")
const PageListItemsController = require("../controllers/AdminPanel/PageItem.controller")
const FourOFourPageController = require("../controllers/AdminPanel/404.controller")
const CataloguesPageController = require("../controllers/AdminPanel/Catalogues.controller")
const BeyondBoundaryPageController  = require("../controllers/AdminPanel/BeyondBoundaries.controller")
const PressReleasePageController = require("../controllers/AdminPanel/PressRelease.controller")
const AlliancesPageController = require("../controllers/AdminPanel/AlliencesPage.controller")
const CareerPageListsController = require("../controllers/AdminPanel/CareerPostingList.controller")

const validation = require("../validators/index");
const upload = require("../middlewares/s3Upload.middleware");
const {createProductSchema, updateProductSchema} = require("../validators/product.validator");
const { createProductSizeSchema, updateProductSizeSchema } = require("../validators/productSize.validator");
const { createProductPriceSchema, updateProductPriceSchema } = require("../validators/productPrice.validator");
const {createProductFinishTypeSchema, updateProductFinishTypeSchema} = require("../validators/FinishesType.validator");
const {createProductCollectionSchema, updateProductCollectionSchema} = require("../validators/ProductCollection.validator");
const {createProductMediaSchema, updateProductMediaSchema} = require("../validators/productMedia.validator");    
const { dynamicRequestValidator } = require("../validators/Contact.validator");
const ContactController = require("../controllers/AdminPanel/Contact.controller");
const metaContentController = require("../controllers/AdminPanel/metaContent.controller");
const ExcelExportUtil = require("../helpers/excelExport");
const Contact = require("../models/Contact.model");
const { createMetaContentSchema, updateMetaContentSchema } = require("../validators/MetaContent.validator");
const HomePageController = require("../controllers/AdminPanel/HomePage.controller");
const { homePageSchema } = require("../validators/HomePage.validator");
const { createPageListItemsSchema, updatePageListItemsSchema } = require("../validators/PageItem.validation");
const { fourOFourPageSchema } = require("../validators/404.validator");
const thankyouPageController = require("../controllers/AdminPanel/thankyouPage.controller");
const { thankYouPageSchema } = require("../validators/thankyouPage.validator");
const { cataloguesPageSchema } = require("../validators/catalogues.validator");
const ContactPageController = require("../controllers/AdminPanel/ContactPage.controller");
const { contactPageSchema } = require("../validators/ContactPage.validator");
const AboutPageController = require("../controllers/AdminPanel/AboutPage.controller");
const { aboutPageSchema } = require("../validators/AboutPage.validator");
const { beyondBoundaryPageSchema } = require("../validators/BeyondBoundaries.validator");
const DIYPageController = require("../controllers/AdminPanel/DIYPage.controller");
const { diyPageSchema } = require("../validators/DIYPage.validator");
const FAQPageController = require("../controllers/AdminPanel/FAQPage.controller");
const { faqPageSchema } = require("../validators/FAQPage.validator");
const GalleryPageController = require("../controllers/AdminPanel/GalleryPage.controller");
const { createGalleryPageSchema, updateGalleryPageSchema } = require("../validators/GalleryPage.validator");
const { createPressReleasePageSchema, updatePressReleasePageSchema } = require("../validators/PressRelease.validator");
const FFactorPageController = require("../controllers/AdminPanel/FFactorPage.controller");
const { fFactorPageSchema } = require("../validators/FFactorPage.validator");
const { alliancesPageSchema } = require("../validators/AlliencesPage.validator");
const CareerPageController = require("../controllers/AdminPanel/CareerPage.controller");
const { careerPageSchema } = require("../validators/CareerPage.validator");
const { createCareerPageListsSchema, updateCareerPageListsSchema } = require("../validators/CareerPostingList.validator");
const AboutPageTeamController = require("../controllers/AdminPanel/AboutPageTeam.controller");
const { createAboutPageTeamSchema, updateAboutPageTeamSchema } = require("../validators/AboutPageTeam.validator");
const { createProductFinishesSchema, updateProductFinishesSchema } = require("../validators/productFinishes.validator");
const adminController = require("../controllers/AdminPanel/admin.controller");
const MetaContentController = require("../controllers/WebAPI/MetaContent.controller");
const VideoSectionController = require("../controllers/AdminPanel/GallerySection.controller");
const { videoSectionSchema } = require("../validators/GallerySection.validator");
const PressReleaseSectionController = require("../controllers/AdminPanel/PressReleaseSection.controller");
const { pressReleaseSectionSchema } = require("../validators/PressReleaseSection.validator");



router.get("/profile", adminController.getAdminProfile)
router.get("/logs", adminController.getAdminLogs)
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



router.get("/product-finishes/", ProductFinishesController.getProductFinishes);
router.get("/product-finishes/:id", ProductFinishesController.getProductFinish);
router.post("/product-finishes/", upload.finishImage, validation(createProductFinishesSchema), ProductFinishesController.createProductFinishes);
router.put("/product-finishes/:id", upload.finishImage, validation(updateProductFinishesSchema), ProductFinishesController.updateProductFinishes);
router.patch("/product-finishes/status/:id", ProductFinishesController.updateStatus);
router.delete("/product-finishes/:id", ProductFinishesController.deleteProductFinishes);


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



router.post("/contact/", upload.contactFile, dynamicRequestValidator, ContactController.createRequest);
router.get("/contact/", ContactController.getRequests);
router.get("/contact/:id", ContactController.getRequest);
router.put("/contact/:id", upload.contactFile, dynamicRequestValidator, ContactController.updateRequest);
router.patch("/contact/status/:id", ContactController.updateStatus);
router.delete("/contact/:id", ContactController.deleteRequest);

// Contact Excel export
router.get("/contact/export/excel", async (req, res) => {
  try {
    const { page, limit, status, request_type, name, email, phone, city, company, sort, order } = req.query;
    let where = {};
    let options = {};

    if (status == 0 || status == 1) {
      where.status = status;
    }

    if (request_type) {
      where.request_type = request_type;
    }

    if (name) {
      where.name = { [require('sequelize').Op.like]: `%${name}%` };
    }

    if (email) {
      where.email = { [require('sequelize').Op.like]: `%${email}%` };
    }

    if (phone) {
      where.phone = { [require('sequelize').Op.like]: `%${phone}%` };
    }

    if (city) {
      where.city = { [require('sequelize').Op.like]: `%${city}%` };
    }

    if (company) {
      where.company = { [require('sequelize').Op.like]: `%${company}%` };
    }

    if (sort) {
      let sortOptions = ["id", "request_type", "name", "email", "phone", "city", "company", "posted_date", "status"];
      if (sortOptions.includes(sort)) {
        options.order = [[sort, order === "desc" ? "DESC" : "ASC"]];
      }
    }

    const contacts = await Contact.findAll({ where, ...options });
    const workbook = await ExcelExportUtil.exportContactsToExcel(contacts);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=contacts_${new Date().toISOString().split('T')[0]}.xlsx`);

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    return res.status(500).json({ status: false, message: "Excel export failed" });
  }
});

// Public routes (for front-end to fetch)
router.get("/meta/slug/:slug", MetaContentController.getMetaContentBySlug)
router.get("/meta/", metaContentController.getMetaContents);
router.get("/meta/:id", metaContentController.getMetaContentById);
// router.get("/slug/:slug", metaContentController.getMetaContentBySlug);

// Authenticated/Protected routes
router.post("/meta/", upload.none(),validation(createMetaContentSchema), metaContentController.createOrUpdateMetaContent);
router.patch("/meta/status/:id", metaContentController.updateStatus);
router.delete("/meta/:id", metaContentController.deleteMetaContent);


// Home Page Controller
router.get("/home-page/", HomePageController.getHomePage);
router.post("/home-page/", upload.pageImages, validation(homePageSchema), HomePageController.createOrUpdateHomePage);


// Page Item Controller
router.get("/page-items/", PageListItemsController.getPageListItems);
router.get("/page-items/:id", PageListItemsController.getPageListItem);
router.post("/page-items/", upload.pageItemFiles, validation(createPageListItemsSchema), PageListItemsController.createPageListItem);
router.put("/page-items/:id", upload.pageItemFiles, validation(updatePageListItemsSchema), PageListItemsController.updatePageListItem);
router.patch("/page-items/status/:id", PageListItemsController.updateStatus);
router.delete("/page-items/:id", PageListItemsController.deletePageListItem);

router.get("/404/", FourOFourPageController.getFourOFourPage);
router.post("/404/", upload.single('image'), validation(fourOFourPageSchema), FourOFourPageController.createOrUpdateFourOFourPage);
router.patch("/404/status", FourOFourPageController.toggleStatus);

router.get("/thankyou-page/", thankyouPageController.getThankYouPages);
router.get("/thankyou-page/:id", thankyouPageController.getThankYouPage);
router.post("/thankyou-page/", upload.fields([{ name: 'background_image', maxCount: 1 }, { name: 'logo_image', maxCount: 1 }]), validation(thankYouPageSchema), thankyouPageController.createThankYouPage);
router.put("/thankyou-page/:id", upload.fields([{ name: 'background_image', maxCount: 1 }, { name: 'logo_image', maxCount: 1 }]), validation(thankYouPageSchema), thankyouPageController.updateThankYouPage);
router.patch("/thankyou-page/status/:id", thankyouPageController.updateStatus);
router.delete("/thankyou-page/:id", thankyouPageController.deleteThankYouPage);


router.get("/catalogues-page/", CataloguesPageController.getCataloguesPage);
router.post("/catalogues-page/", upload.none(),validation(cataloguesPageSchema), CataloguesPageController.createOrUpdateCataloguesPage);
router.patch("/catalogues-page/status", CataloguesPageController.toggleStatus);


router.get("/contact-page/", ContactPageController.getContactPage);
router.post("/contact-page/", upload.contactPageImages, validation(contactPageSchema), ContactPageController.createOrUpdateContactPage);
router.patch("/contact-page/status", ContactPageController.toggleStatus);

router.get("/about-page/", AboutPageController.getAboutPage);
router.post("/about-page/", upload.single('header_image'), validation(aboutPageSchema), AboutPageController.createOrUpdateAboutPage);
router.patch("/about-page/status", AboutPageController.toggleStatus);


router.get("/beyondboundaries-page/", BeyondBoundaryPageController.getBeyondBoundaryPage);
router.post("/beyondboundaries-page/", upload.fields([{ name: 'header_image', maxCount: 1 }, { name: 'video_autoplay', maxCount: 1 }, { name: 'footer_pincode_video', maxCount: 1 }]), validation(beyondBoundaryPageSchema), BeyondBoundaryPageController.createOrUpdateBeyondBoundaryPage);
router.patch("/beyondboundaries-page/status", BeyondBoundaryPageController.toggleStatus);


router.get("/doityourself-page/", DIYPageController.getDIYPage);
router.post("/doityourself-page/", upload.fields([{ name: 'video_file', maxCount: 1 }, { name: 'popup_file', maxCount: 1 }]), validation(diyPageSchema), DIYPageController.createOrUpdateDIYPage);
router.patch("/doityourself-page/status", DIYPageController.toggleStatus);


router.get("/faq-page/", FAQPageController.getFAQPage);
router.post("/faq-page/", upload.none(), validation(faqPageSchema), FAQPageController.createOrUpdateFAQPage);
router.patch("/faq-page/status", FAQPageController.toggleStatus);


// Public routes
router.get("/gallery-page/", GalleryPageController.getGalleryPages);
router.get("/gallery-page/:id", GalleryPageController.getGalleryPage);

// Authenticated/Protected routes
router.post("/gallery-page/", upload.galleryMedia, validation(createGalleryPageSchema), GalleryPageController.createGalleryPage);
router.put("/gallery-page/:id", upload.galleryMedia, validation(updateGalleryPageSchema), GalleryPageController.updateGalleryPage);
router.patch("/gallery-page/status/:id", GalleryPageController.updateStatus);
router.delete("/gallery-page/:id", GalleryPageController.deleteGalleryPage);

// Press Release Page routes
router.get("/pressrelease-page/", PressReleasePageController.getPressReleasePages);
router.get("/pressrelease-page/:id", PressReleasePageController.getPressReleasePage);
router.post("/pressrelease-page/", upload.fields([{ name: 'banner_image', maxCount: 1 }, { name: 'image', maxCount: 1 }]), validation(createPressReleasePageSchema), PressReleasePageController.createPressReleasePage);
router.put("/pressrelease-page/:id", upload.fields([{ name: 'banner_image', maxCount: 1 }, { name: 'image', maxCount: 1 }]), validation(updatePressReleasePageSchema), PressReleasePageController.updatePressReleasePage);
router.patch("/pressrelease-page/status/:id", PressReleasePageController.updateStatus);
router.delete("/pressrelease-page/:id", PressReleasePageController.deletePressReleasePage);

// Press Release Section routes
router.get("/pressrelease-section/", PressReleaseSectionController.getPressReleaseSection);
router.post("/pressrelease-section/", upload.none(), validation(pressReleaseSectionSchema.partial()), PressReleaseSectionController.createOrUpdatePressReleaseSection);
router.patch("/pressrelease-section/status", PressReleaseSectionController.toggleStatus);


router.get("/ffactor-page/", FFactorPageController.getFFactorPage);
router.post("/ffactor-page/", upload.fields([{ name: 'header_image', maxCount: 1 }, { name: 'perffection_video', maxCount: 1 }, { name: 'footer_video', maxCount: 1 }]), validation(fFactorPageSchema), FFactorPageController.createOrUpdateFFactorPage);
router.patch("/ffactor-page/status", FFactorPageController.toggleStatus);

router.get("/alliance-page/", AlliancesPageController.getAlliancesPage);
router.post("/alliance-page/", upload.single('header_image'), validation(alliancesPageSchema), AlliancesPageController.createOrUpdateAlliancesPage);
router.patch("/alliance-page/status", AlliancesPageController.toggleStatus);


router.get("/career-page/", CareerPageController.getCareerPage);
router.post("/career-page/", upload.fields([{ name: 'header_image', maxCount: 1 }, { name: 'invited_image', maxCount: 1 }, { name: 'about_image', maxCount: 1 }, { name: 'footer_title_image', maxCount: 1 }, { name: 'footer_image', maxCount: 1 }]), validation(careerPageSchema), CareerPageController.createOrUpdateCareerPage);
router.patch("/career-page/status", CareerPageController.toggleStatus);


// Public routes
router.get("/careerpostings/", CareerPageListsController.getCareerPageLists);
router.get("/careerpostings/:id", CareerPageListsController.getCareerPageList);

// Authenticated/Protected routes
router.post("/careerpostings/", upload.none(), validation(createCareerPageListsSchema), CareerPageListsController.createCareerPageList);
router.put("/careerpostings/:id", upload.none(), validation(updateCareerPageListsSchema), CareerPageListsController.updateCareerPageList);
router.patch("/careerpostings/status/:id", CareerPageListsController.updateStatus);
router.delete("/careerpostings/:id", CareerPageListsController.deleteCareerPageList);


// Public routes
router.get("/aboutteam/", AboutPageTeamController.getAboutPageTeams);
router.get("/aboutteam/:id", AboutPageTeamController.getAboutPageTeam);
router.post("/aboutteam/", upload.single('image'), validation(createAboutPageTeamSchema), AboutPageTeamController.createAboutPageTeam);
router.put("/aboutteam/:id", upload.single('image'), validation(updateAboutPageTeamSchema), AboutPageTeamController.updateAboutPageTeam);
router.patch("/aboutteam/status/:id", AboutPageTeamController.updateStatus);
router.delete("/aboutteam/:id", AboutPageTeamController.deleteAboutPageTeam);

// Page Items delete route
router.delete("/page-items/:id", PageListItemsController.deletePageListItem);

// Video Section routes
router.get("/gallery-section/", VideoSectionController.getVideoSection);
router.post("/gallery-section/", upload.single('video_file'), validation(videoSectionSchema), VideoSectionController.createOrUpdateVideoSection);
router.patch("/gallery-section/status", VideoSectionController.toggleStatus);

module.exports = router;