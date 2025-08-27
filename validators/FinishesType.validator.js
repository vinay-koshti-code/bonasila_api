const { z } = require('zod');

const productFinishTypeSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  video_title: z.string().min(1, 'Video title is required'),
  video_url: z.string().optional(),
  long_title: z.string().min(1, 'Long title is required'),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createProductFinishTypeSchema: productFinishTypeSchema,
  updateProductFinishTypeSchema: productFinishTypeSchema.partial(),
};