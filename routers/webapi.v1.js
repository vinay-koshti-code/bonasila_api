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

module.exports = router;