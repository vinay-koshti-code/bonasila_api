const { z } = require('zod');

const metaContentSchema = z.object({
  page_slug: z.string().min(1, 'Page slug is required').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with dashes'),
  page_name: z.string().min(1, 'Page name is required'),
  title: z.string().optional(),
  keywords: z.string().optional(),
  description: z.string().optional(),
  header_script: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createMetaContentSchema: metaContentSchema,
  updateMetaContentSchema: metaContentSchema.partial()
};