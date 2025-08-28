const FourOFourPage = require("../../models/404.model");

class FourOFourPageWebController {
  /**
   * Get 404 page content
   */
  async get404PageData(req, res) {
    try {
      // Get 404 page content
      const fourOFourPage = await FourOFourPage.findByPk(1);
      
      if (!fourOFourPage) {
        return res.status(404).json({ 
          message: "404 page content not found", 
          status: false 
        });
      }

      return res.status(200).json({
        data: {
          page_content: fourOFourPage
        },
        message: "404 page data fetched successfully",
        status: true,
      });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ 
        status: false, 
        message: "Something went wrong" 
      });
    }
  }
}

module.exports = new FourOFourPageWebController();