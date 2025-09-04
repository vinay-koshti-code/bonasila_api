const VideoSection = require("../../models/GallerySection.model");

class VideoSectionController {
  async getVideoSection(req, res) {
    try {
      const videoSection = await VideoSection.findByPk(1);

      if (!videoSection) {
        return res.status(404).json({ status: false, message: "Video section content not found" });
      }

      return res.status(200).json({
        status: true,
        message: "Video section content fetched successfully",
        data: videoSection,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async createOrUpdateVideoSection(req, res) {
    try {
      let videoSection = await VideoSection.scope('unscoped').findByPk(1);
      const validatedData = { ...req.validated };
      
      if (req.file) {
        validatedData.video_file = req.file.filename;
      }

      if (!videoSection) {
        videoSection = await VideoSection.create({ id: 1, ...validatedData });
        return res.status(201).json({
          status: true,
          message: "Video section content created successfully",
          data: videoSection,
        });
      } else {
        await videoSection.update(validatedData);
        const updatedVideoSection = await VideoSection.findByPk(1);
        return res.status(200).json({
          status: true,
          message: "Video section content updated successfully",
          data: updatedVideoSection,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  async toggleStatus(req, res) {
    try {
      const videoSection = await VideoSection.scope('unscoped').findByPk(1);

      if (!videoSection) {
        return res.status(404).json({ status: false, message: "Video section content not found" });
      }

      const newStatus = videoSection.status === 1 ? 0 : 1;
      await videoSection.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Video section status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}

module.exports = new VideoSectionController();