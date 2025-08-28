const { z } = require('zod');

const productSizeSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  alphabet: z.string().min(1, 'Alphabet is required'),
    status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createProductSizeSchema: productSizeSchema,
  updateProductSizeSchema: productSizeSchema.partial(),
};