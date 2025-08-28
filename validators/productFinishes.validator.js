const { z } = require('zod');

const productFinishesSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  // image: z.string().min(1, 'Image URL is required'),
  finishes_type_id: z.union([z.string().transform((val) => parseInt(val, 10)), z.number()]).pipe(z.number({ message: "Finishes type ID is required"})),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createProductFinishesSchema: productFinishesSchema,
  updateProductFinishesSchema: productFinishesSchema.partial().omit({ finishes_type_id: true }),
};