const { z } = require('zod');

const productFinishesSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  image: z.string().min(1, 'Image URL is required'),
  finishes_type_id: z.number().int('Finishes type ID must be an integer').min(1, 'Finishes type ID is required'),
  status: z.number().int().min(0).max(1).optional(),
});

module.exports = {
  createProductFinishesSchema: productFinishesSchema,
  updateProductFinishesSchema: productFinishesSchema.partial().omit({ finishes_type_id: true }),
};