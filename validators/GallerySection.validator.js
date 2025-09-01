const { z } = require("zod");

const videoSectionSchema = z.object({
  tag_line: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  youtube_video: z.string().nullable().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = { videoSectionSchema };
