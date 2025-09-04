const ThankYouPage = require("../../models/thankyouPage.model");
const MetaContent = require("../../models/MetaContent.model");

class ThankYouPageWebController {
  async getThankYouPageData(req, res) {
    try {
      const { page_type } = req.query;
      
      if (!page_type) {
        return res.status(400).json({ 
          message: "page_type query parameter is required", 
          status: false 
        });
      }

      const thankYouPage = await ThankYouPage.findOne({
        where: { 
          page_type: page_type,
          status: 1 
        }
      });
      
      if (!thankYouPage) {
        return res.status(404).json({ 
          message: "Thank you page content not found for this page type", 
          status: false 
        });
      }

      const metaContent = await MetaContent.findOne({
        where: { page_slug: `thankyou-${page_type}` }
      });

      return res.status(200).json({
        data: {
          page_content: thankYouPage,
          meta_content: metaContent
        },
        message: "Thank you page data fetched successfully",
        status: true,
      });
    } catch (error) {
      return res.status(500).json({ 
        status: false, 
        message: err.message 
      });
    }
  }
}

module.exports = new ThankYouPageWebController();