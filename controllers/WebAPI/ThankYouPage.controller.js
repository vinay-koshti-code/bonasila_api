const ThankYouPage = require("../../models/thankyouPage.model");

class ThankYouPageWebController {
  async getThankYouPageData(req, res) {
    try {
      const thankYouPage = await ThankYouPage.findByPk(1);
      
      if (!thankYouPage) {
        return res.status(404).json({ 
          message: "Thank you page content not found", 
          status: false 
        });
      }

      return res.status(200).json({
        data: {
          page_content: thankYouPage
        },
        message: "Thank you page data fetched successfully",
        status: true,
      });
    } catch (error) {
      return res.status(500).json({ 
        status: false, 
        message: "Something went wrong" 
      });
    }
  }
}

module.exports = new ThankYouPageWebController();