const { z } = require('zod');

const productCollectionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  long_title: z.string().min(1, 'Long title is required'),
  homepage_long_title: z.string().min(1, 'Homepage long title is required'),
  homepage_short_description: z.string().min(1, 'Homepage short description is required'),
  description: z.string().min(1, 'Description is required'),
  content: z.string().min(1, 'Content is required'),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createProductCollectionSchema: productCollectionSchema,
  updateProductCollectionSchema: productCollectionSchema.partial(),
};