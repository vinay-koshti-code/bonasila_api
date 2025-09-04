const MetaContent = require("../../models/MetaContent.model");
const { Op } = require("sequelize");

class MetaContentController {

  /**
   * Fetches a single meta content record by page slug.
   */
  async getMetaContentBySlug(req, res) {
    try {
      const { slug } = req.params;
      const metaContent = await MetaContent.findOne({
        where: { page_slug: slug },
      });

      if (!metaContent) {
        return res
          .status(404)
          .json({ message: "Meta Content not found", status: false });
      }

      return res.status(200).json({
        data: metaContent,
        message: "Meta Content fetched successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: err.message });
    }
  }
}

module.exports = new MetaContentController();