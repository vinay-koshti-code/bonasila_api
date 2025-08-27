const { z } = require('zod');

const beyondBoundaryPageSchema = z.object({
  tag_line: z.string().optional(),
  footer_text: z.string().optional(),
  video_autoplay: z.string().optional(),
  header_image: z.string().optional(),
  footer_pincode_title: z.string().optional(),
  footer_pincode_text: z.string().optional(),
  footer_pincode_video: z.string().optional(),
  list_header: z.string().optional(),
  list_footer: z.string().optional(),
  description: z.string().optional(),
  status: z.number().int().min(0).max(1).optional(),
});

module.exports = {
  beyondBoundaryPageSchema: beyondBoundaryPageSchema,
};