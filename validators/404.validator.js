const { z } = require('zod');

const fourOFourPageSchema = z.object({
  page_title: z.string().optional(),
  page_description: z.string().optional(),
  page_link: z.string().optional(),
  page_link_title: z.string().optional(),
  // image: z.string().optional(),
});

module.exports = {
  fourOFourPageSchema: fourOFourPageSchema,
};