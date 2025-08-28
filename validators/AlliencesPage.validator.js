const { z } = require('zod');

const alliancesPageSchema = z.object({
  description: z.string().optional(),
  header_image: z.string().optional(),
  header_title: z.string().optional(),
  alliance_title: z.string().optional(),
  form_title: z.string().optional(),
  form_footer_content: z.string().optional(),
  finishes_title: z.string().optional(),
  finishes_subtitle: z.string().optional(),
  finishes_content: z.string().optional(),
  finishes_link_title: z.string().optional(),
  finishes_link_url: z.string().optional(),
  list_header: z.string().optional(),
  list_content: z.string().optional(),
  list_title: z.string().optional(),
  ffactor_header: z.string().optional(),
  ffactor_content: z.string().optional(),
  ffactor_link_title: z.string().optional(),
  ffactor_link_url: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  alliancesPageSchema: alliancesPageSchema,
};