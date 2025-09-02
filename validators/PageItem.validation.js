const { z } = require('zod');

const pageListItemsSchema = z.object({
  page_type: z.enum([
    'home_page',
    'about_page',
    'career_page',
    'contact_page',
    'ffactor_page',
    'beyond_boundary_page',
    'diy_page',
    'faq_page',
    'alliance_page',
    'press_release_page',
    'catalogues_page',
    'gallery_page'
  ]),
  list_type: z.string().min(1, 'List type is required'),
  title: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  image_alt: z.string().optional(),
  link_url: z.string().optional(),
  pdf: z.string().optional(),
  order_no: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createPageListItemsSchema: pageListItemsSchema,
  updatePageListItemsSchema: pageListItemsSchema.partial().omit({ page_type: true, list_type: true }),
};