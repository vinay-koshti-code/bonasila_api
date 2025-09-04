const FourOFourPage = require("../../models/404.model");
const MetaContent = require("../../models/MetaContent.model");

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

      const meta_content = await MetaContent.findOne({
        where: {
          page_slug: "404"
        }
      });
      
      return res.status(200).json({
        data: {
          page_content: fourOFourPage,
          meta: meta_content
        },
        message: "404 page data fetched successfully",
        status: true,
      });
    } catch (error) {
      console.log(error)
      return res.status(500).json({ 
        status: false, 
        message: err.message 
      });
    }
  }
}

module.exports = new FourOFourPageWebController();