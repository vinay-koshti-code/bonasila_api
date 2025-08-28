const { z } = require('zod');

const careerPageSchema = z.object({
  tag_link: z.string().optional(),
  header: z.string().optional(),
  header_image: z.string().optional(),
  page_link: z.string().optional(),
  page_link_title: z.string().optional(),
  header_title: z.string().optional(),
  header_description: z.string().optional(),
  invited_title: z.string().optional(),
  invited_subtitle: z.string().optional(),
  invited_content: z.string().optional(),
  invited_image: z.string().optional(),
  invited_link: z.string().optional(),
  invited_link_title: z.string().optional(),
  about_title: z.string().optional(),
  about_subtitle: z.string().optional(),
  about_content: z.string().optional(),
  about_image: z.string().optional(),
  about_link: z.string().optional(),
  about_link_title: z.string().optional(),
  form_title: z.string().optional(),
  form_footer_content: z.string().optional(),
  footer_title: z.string().optional(),
  footer_title_image: z.string().optional(),
  footer_content: z.string().optional(),
  footer_image: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  careerPageSchema: careerPageSchema,
};