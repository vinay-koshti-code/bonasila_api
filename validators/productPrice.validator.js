const { z } = require('zod');

const productPriceSchema = z.object({
  product_id: z.number().int('Product ID must be an integer').min(1, 'Product ID is required'),
  name: z.string().min(1, 'Name is required'),
  a_size: z.string().min(1, 'A size is required'),
  b_size: z.string().min(1, 'B size is required'),
  c_size: z.string().min(1, 'C size is required'),
  d_size: z.string().min(1, 'D size is required'),
  h_size: z.string().min(1, 'H size is required'),
  price_in_inr: z.number().min(0, 'Price must be a positive number'),
  price_in_usd: z.number().min(0, 'Price must be a positive number'),
});

module.exports = {
  createProductPriceSchema: productPriceSchema,
  updateProductPriceSchema: productPriceSchema.partial().omit({ product_id: true }),
};