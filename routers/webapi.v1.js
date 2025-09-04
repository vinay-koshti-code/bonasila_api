const {Router} = require("express");
const router = Router();
const validator = require("../validators/index")
const { dynamicRequestValidator } = require("../validators/Contact.validator");
const ContactController = require("../controllers/WebAPI/Contact.controller.js");
const metaContentController = require("../controllers/WebAPI/MetaContent.controller.js");
const upload = require("../middlewares/s3Upload.middleware");

// Page Controllers
const HomePageController = require("../controllers/AdminPanel/HomePage.controller");
const AboutPageController = require("../controllers/AdminPanel/AboutPage.controller");
const ContactPageController = require("../controllers/AdminPanel/ContactPage.controller");
const DIYPageController = require("../controllers/AdminPanel/DIYPage.controller");
const GalleryPageController = require("../controllers/AdminPanel/GalleryPage.controller");
const FAQPageController = require("../controllers/AdminPanel/FAQPage.controller");
const ThankYouPageController = require("../controllers/AdminPanel/thankyouPage.controller");
const CataloguesPageController = require("../controllers/AdminPanel/Catalogues.controller");
const BeyondBoundaryPageController = require("../controllers/AdminPanel/BeyondBoundaries.controller");
const PressReleasePageController = require("../controllers/AdminPanel/PressRelease.controller");
const FFactorPageController = require("../controllers/AdminPanel/FFactorPage.controller");
const AlliancesPageController = require("../controllers/AdminPanel/AlliencesPage.controller");
const CareerPageController = require("../controllers/AdminPanel/CareerPage.controller");
const CareerPostingListController = require("../controllers/AdminPanel/CareerPostingList.controller");
const AboutPageTeamController = require("../controllers/AdminPanel/AboutPageTeam.controller");

// Contact Request Router
const HomePageWebController = require("../controllers/WebAPI/HomePage.controller");
const AboutPageWebController = require("../controllers/WebAPI/AboutPage.controller");
const FourOFourPageWebController = require("../controllers/WebAPI/404Page.controller");
const BeyondBoundariesPageWebController = require("../controllers/WebAPI/BeyondBoundariesPage.controller");
const CareerPageWebController = require("../controllers/WebAPI/CareerPage.controller");
const CataloguesPageWebController = require("../controllers/WebAPI/CataloguesPage.controller");
const DIYPageWebController = require("../controllers/WebAPI/DIYPage.controller");
const FAQPageWebController = require("../controllers/WebAPI/FAQPage.controller");
const ContactPageWebController = require("../controllers/WebAPI/ContactPage.controller");
const FFactorPageWebController = require("../controllers/WebAPI/FFactorPage.controller");
const GalleryPageWebController = require("../controllers/WebAPI/GalleryPage.controller");
const PressReleasePageWebController = require("../controllers/WebAPI/PressReleasePage.controller");
const ThankYouPageWebController = require("../controllers/WebAPI/ThankYouPage.controller");
const ProductWebController = require("../controllers/WebAPI/Product.controller");
const ProductCollectionWebController = require("../controllers/WebAPI/ProductCollection.controller");
const VideoSectionWebController = require("../controllers/WebAPI/GallerySection.controller.js");


// Meta Content Router
router.get("/meta/slug/:slug", metaContentController.getMetaContentBySlug);

// Page Content Routes (Public)
router.post("/contact/", upload.contactFile, dynamicRequestValidator, ContactController.createRequest);
router.get("/home", HomePageController.getHomePage);
router.get("/about", AboutPageController.getAboutPage);
router.get("/contact", ContactPageController.getContactPage);
router.get("/diy", DIYPageController.getDIYPage);
router.get("/gallery", GalleryPageController.getGalleryPages);
router.get("/faq", FAQPageController.getFAQPage);
router.get("/thankyou", ThankYouPageController.getThankYouPage);
router.get("/catalogues", CataloguesPageController.getCataloguesPage);
router.get("/beyond-boundaries", BeyondBoundaryPageController.getBeyondBoundaryPage);
router.get("/press-release", PressReleasePageController.getPressReleasePages);
router.get("/f-factor", FFactorPageController.getFFactorPage);
router.get("/alliances", AlliancesPageController.getAlliancesPage);
router.get("/career", CareerPageController.getCareerPage);
router.get("/career-postings", CareerPostingListController.getCareerPageLists);
router.get("/about-team", AboutPageTeamController.getAboutPageTeams);

// Homepage data route
router.get("/page/homepage", HomePageWebController.getHomePageData);

// About page data route
router.get("/page/aboutpage", AboutPageWebController.getAboutPageData);

// 404 page data route
router.get("/page/404page", FourOFourPageWebController.get404PageData);

// Beyond boundaries page data route
router.get("/page/beyondboundariespage", BeyondBoundariesPageWebController.getBeyondBoundariesPageData);

// Career page data route
router.get("/page/careerpage", CareerPageWebController.getCareerPageData);

// Catalogues page data route
router.get("/page/cataloguespage", CataloguesPageWebController.getCataloguesPageData);

// DIY page data route
router.get("/page/diypage", DIYPageWebController.getDIYPageData);

// FAQ page data route
router.get("/page/faqpage", FAQPageWebController.getFAQPageData);

// Contact page data route
router.get("/page/contactpage", ContactPageWebController.getContactPageData);

// F-Factor page data route
router.get("/page/ffactorpage", FFactorPageWebController.getFFactorPageData);

// Gallery page data route
router.get("/page/gallerypage", GalleryPageWebController.getGalleryPageData);

// Press release page data route
router.get("/page/pressreleasepage", PressReleasePageWebController.getPressReleasePageData);

// Thank you page data route
router.get("/page/thankyoupage", ThankYouPageWebController.getThankYouPageData);

// Product routes
router.get("/page/products", ProductWebController.getProducts);
router.get("/page/products/:id", ProductWebController.getProduct);

// Collection routes
router.get("/page/collections", ProductCollectionWebController.getCollections);
router.get("/page/collections/:id", ProductCollectionWebController.getCollection);

// Video section route
router.get("/videosection", VideoSectionWebController.getVideoSectionData);

module.exports = router;