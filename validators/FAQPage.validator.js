const { z } = require('zod');

const faqPageSchema = z.object({
  tag_line: z.string().optional(),
  faq_title: z.string().optional(),
  form_title: z.string().optional(),
  form_submit_text: z.string().optional(),
  form_footer_text: z.string().optional(),
  description: z.string().optional(),
  status: z.number().int().min(0).max(1).optional(),
});

module.exports = {
  faqPageSchema: faqPageSchema,
};