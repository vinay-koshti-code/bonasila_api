const { z } = require('zod');

const thankYouPageSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
  page_type: z.string().min(1, 'Page type is required'),
  content: z.string().optional(),
});

module.exports = {
  thankYouPageSchema: thankYouPageSchema,
};