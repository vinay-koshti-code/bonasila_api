const { z } = require('zod');

const productMediaSchema = z.object({
  product_id: z.union([z.string().transform((val) => parseInt(val, 10)), z.number()]).pipe(z.number({ message: "Product id is required"})),
  file_alt: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createProductMediaSchema: productMediaSchema,
  updateProductMediaSchema: productMediaSchema.partial().omit({ product_id: true }),
};