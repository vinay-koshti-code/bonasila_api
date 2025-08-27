const { z } = require('zod');

const fFactorPageSchema = z.object({
  tag_line: z.string().optional(),
  header: z.string().optional(),
  header_image: z.string().optional(),
  header_title: z.string().optional(),
  header_description: z.string().optional(),
  perffection_title: z.string().optional(),
  perffection_subtitle: z.string().optional(),
  perffection_content: z.string().optional(),
  perffection_video: z.string().optional(),
  about_title: z.string().optional(),
  about_subtitle: z.string().optional(),
  about_content: z.string().optional(),
  about_footer_title: z.string().optional(),
  footer_title: z.string().optional(),
  footer_subtitle: z.string().optional(),
  footer_content: z.string().optional(),
  footer_video: z.string().optional(),
  footer_link: z.string().optional(),
  footer_link_title: z.string().optional(),
  status: z.number().int().min(0).max(1).optional(),
});

module.exports = {
  fFactorPageSchema: fFactorPageSchema,
};