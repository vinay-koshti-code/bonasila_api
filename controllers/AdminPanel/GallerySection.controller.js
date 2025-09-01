const VideoSection = require("../../models/GallerySection.model");

class VideoSectionController {
  async getVideoSection(req, res) {
    try {
      const videoSection = await VideoSection.findByPk(1);

      if (!videoSection) {
        return res.status(404).json({ message: "Video section content not found", status: false });
      }

      return res.status(200).json({
        data: videoSection,
        message: "Video section content fetched successfully",
        status: true,
      });
    } catch (e) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
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
          data: videoSection,
          message: "Video section content created successfully",
          status: true,
        });
      } else {
        await videoSection.update(validatedData);
        const updatedVideoSection = await VideoSection.findByPk(1);
        return res.status(200).json({
          data: updatedVideoSection,
          message: "Video section content updated successfully",
          status: true,
        });
      }
    } catch (err) {
      return res.status(500).json({ status: false, message: "Something went wrong" });
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
      return res.status(500).json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new VideoSectionController();