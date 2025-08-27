const { z } = require('zod');

const contactPageSchema = z.object({
  tag_link: z.string().optional(),
  header_description: z.string().optional(),
  form_title: z.string().optional(),
  form_footer_details: z.string().optional(),
  form_footer_highlights: z.string().optional(),
  sales_person: z.string().optional(),
  sales_person_position: z.string().optional(),
  sales_person_info: z.string().optional(),
  sales_person_image: z.string().optional(),
  address_info: z.string().optional(),
  phone_1: z.string().optional(),
  phone_2: z.string().optional(),
  phone_3: z.string().optional(),
  email: z.string().optional(),
  company_name: z.string().optional(),
  address: z.string().optional(),
  footer_image: z.string().optional(),
  image_alt: z.string().optional(),
  footer_title: z.string().optional(),
  footer_link: z.string().optional(),
  footer_link_title: z.string().optional(),
  status: z.number().int().min(0).max(1).optional(),
});

module.exports = {
  contactPageSchema: contactPageSchema,
};