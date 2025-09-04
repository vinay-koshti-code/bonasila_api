const PressReleaseSectionPage = require("../../models/PressReleaseSection.model");

class PressReleaseSectionController {
  async getPressReleaseSection(req, res) {
    try {
      const pressReleaseSection = await PressReleaseSectionPage.findOne();

      if (!pressReleaseSection) {
        return res
          .status(404)
          .json({ message: "Press Release Section not found", status: false });
      }

      return res.status(200).json({
        status: true,
        message: "Press Release Section fetched successfully",
        data: pressReleaseSection,
      });
    } catch (err) {
      console.log(err)
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  async createOrUpdatePressReleaseSection(req, res) {
    try {
      const existingSection = await PressReleaseSectionPage.findOne();

      let pressReleaseSection;
      if (existingSection) {
        await PressReleaseSectionPage.update(req.validated, { where: { id: existingSection.id } });
        pressReleaseSection = await PressReleaseSectionPage.findByPk(existingSection.id);
      } else {
        pressReleaseSection = await PressReleaseSectionPage.create(req.validated);
      }

      return res.status(200).json({
        data: pressReleaseSection,
        message: "Press Release Section saved successfully",
        status: true,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }

  async toggleStatus(req, res) {
    try {
      const pressReleaseSection = await PressReleaseSectionPage.findOne();

      if (!pressReleaseSection) {
        return res.status(404).json({ status: false, message: "Press Release Section not found" });
      }

      const newStatus = pressReleaseSection.status === 1 ? 0 : 1;
      await pressReleaseSection.update({ status: newStatus });

      return res.status(200).json({
        status: true,
        message: `Press Release Section status updated to ${newStatus === 1 ? 'active' : 'inactive'}`,
      });
    } catch (err) {
      return res
        .status(500)
        .json({ status: false, message: "Something went wrong" });
    }
  }
}

module.exports = new PressReleaseSectionController();