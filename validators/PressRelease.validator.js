const { z } = require('zod');

const pressReleasePageSchema = z.object({
  question: z.string().min(1, 'Question is required'),
  image: z.string().min(1, 'Image URL or path is required'),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createPressReleasePageSchema: pressReleasePageSchema,
  updatePressReleasePageSchema: pressReleasePageSchema.partial(),
};