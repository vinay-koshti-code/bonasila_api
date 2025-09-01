const VideoSection = require("../../models/GallerySection.model");
const MetaContent = require("../../models/MetaContent.model");

class VideoSectionWebController {
  async getVideoSectionData(req, res) {
    try {
      const videoSection = await VideoSection.findByPk(1);
      
      if (!videoSection) {
        return res.status(404).json({ 
          message: "Video section content not found", 
          status: false 
        });
      }

      const metaContent = await MetaContent.findOne({
        where: { page_slug: 'video-section' }
      });

      return res.status(200).json({
        data: {
          video_section_content: videoSection,
          meta_content: metaContent
        },
        message: "Video section data fetched successfully",
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

module.exports = new VideoSectionWebController();