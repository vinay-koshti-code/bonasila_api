const { z } = require('zod');

const productMediaSchema = z.object({
  product_id: z.number().int('Product ID must be an integer').min(1, 'Product ID is required'),
  alt_text: z.string().optional(),
  order: z.number().int().min(0).optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createProductMediaSchema: productMediaSchema,
  updateProductMediaSchema: productMediaSchema.partial().omit({ product_id: true }),
};