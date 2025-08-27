const { z } = require('zod');

const pageMediaSchema = z.object({
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
  block_id: z.number().int().optional().nullable(),
  media_type: z.enum(['image', 'video', 'pdf']),
  file_url: z.string().url('File URL must be a valid URL'),
  alt_text: z.string().optional().nullable(),
  order_no: z.number().int().optional().nullable(),
  status: z.number().int().min(0).max(1).optional(),
});

module.exports = {
  createPageMediaSchema: pageMediaSchema,
  updatePageMediaSchema: pageMediaSchema.partial().omit({ page_type: true }),
};