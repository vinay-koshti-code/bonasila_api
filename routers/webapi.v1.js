const {Router} = require("express");
const router = Router();
const validator = require("../validators/index")
const { dynamicRequestValidator } = require("../validators/Contact.validator");
const ContactController = require("../controllers/WebAPI/Contact.Controller.js");
const metaContentController = require("../controllers/WebAPI/MetaContent.controller.js");
const upload = require("../middlewares/upload.middleware");

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
router.post("/contact/", upload.contactFile, dynamicRequestValidator, ContactController.createRequest);

// Meta Content Router
router.get("/meta/slug/:slug", metaContentController.getMetaContentBySlug);

// Page Content Routes (Public)
router.get("/pages/home", HomePageController.getHomePage);
router.get("/pages/about", AboutPageController.getAboutPage);
router.get("/pages/contact", ContactPageController.getContactPage);
router.get("/pages/diy", DIYPageController.getDIYPage);
router.get("/pages/gallery", GalleryPageController.getGalleryPages);
router.get("/pages/faq", FAQPageController.getFAQPage);
router.get("/pages/thankyou", ThankYouPageController.getThankYouPage);
router.get("/pages/catalogues", CataloguesPageController.getCataloguesPage);
router.get("/pages/beyond-boundaries", BeyondBoundaryPageController.getBeyondBoundaryPage);
router.get("/pages/press-release", PressReleasePageController.getPressReleasePages);
router.get("/pages/f-factor", FFactorPageController.getFFactorPage);
router.get("/pages/alliances", AlliancesPageController.getAlliancesPage);
router.get("/pages/career", CareerPageController.getCareerPage);
router.get("/pages/career-postings", CareerPostingListController.getCareerPageLists);
router.get("/pages/about-team", AboutPageTeamController.getAboutPageTeams);

// Homepage data route
const HomePageWebController = require("../controllers/WebAPI/HomePage.controller");
router.get("/homepage", HomePageWebController.getHomePageData);

// About page data route
const AboutPageWebController = require("../controllers/WebAPI/AboutPage.controller");
router.get("/aboutpage", AboutPageWebController.getAboutPageData);

// 404 page data route
const FourOFourPageWebController = require("../controllers/WebAPI/404Page.controller");
router.get("/404page", FourOFourPageWebController.get404PageData);

// Beyond boundaries page data route
const BeyondBoundariesPageWebController = require("../controllers/WebAPI/BeyondBoundariesPage.controller");
router.get("/beyondboundariespage", BeyondBoundariesPageWebController.getBeyondBoundariesPageData);

// Career page data route
const CareerPageWebController = require("../controllers/WebAPI/CareerPage.controller");
router.get("/careerpage", CareerPageWebController.getCareerPageData);

// Catalogues page data route
const CataloguesPageWebController = require("../controllers/WebAPI/CataloguesPage.controller");
router.get("/cataloguespage", CataloguesPageWebController.getCataloguesPageData);

// DIY page data route
const DIYPageWebController = require("../controllers/WebAPI/DIYPage.controller");
router.get("/diypage", DIYPageWebController.getDIYPageData);

// FAQ page data route
const FAQPageWebController = require("../controllers/WebAPI/FAQPage.controller");
router.get("/faqpage", FAQPageWebController.getFAQPageData);

// Contact page data route
const ContactPageWebController = require("../controllers/WebAPI/ContactPage.controller");
router.get("/contactpage", ContactPageWebController.getContactPageData);

// F-Factor page data route
const FFactorPageWebController = require("../controllers/WebAPI/FFactorPage.controller");
router.get("/ffactorpage", FFactorPageWebController.getFFactorPageData);

// Gallery page data route
const GalleryPageWebController = require("../controllers/WebAPI/GalleryPage.controller");
router.get("/gallerypage", GalleryPageWebController.getGalleryPageData);

// Press release page data route
const PressReleasePageWebController = require("../controllers/WebAPI/PressReleasePage.controller");
router.get("/pressreleasepage", PressReleasePageWebController.getPressReleasePageData);

// Thank you page data route
const ThankYouPageWebController = require("../controllers/WebAPI/ThankYouPage.controller");
router.get("/thankyoupage", ThankYouPageWebController.getThankYouPageData);

// Product routes
const ProductWebController = require("../controllers/WebAPI/Product.controller");
router.get("/products", ProductWebController.getProducts);
router.get("/products/:id", ProductWebController.getProduct);

// Collection routes
const ProductCollectionWebController = require("../controllers/WebAPI/ProductCollection.controller");
router.get("/collections", ProductCollectionWebController.getCollections);
router.get("/collections/:id", ProductCollectionWebController.getCollection);

module.exports = router;