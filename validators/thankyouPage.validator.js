const { z } = require('zod');

const thankYouPageSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  thankYouPageSchema: thankYouPageSchema,
};