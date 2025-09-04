const { z } = require('zod');

const createProductPriceSchema = z.object({
  product_id: z.union([z.string().transform((val) => parseInt(val, 10)), z.number()]).pipe(z.number().int()),
  name: z.string().min(1, "name is required"),
  a_size: z.union([z.string(), z.number()]).optional(),
  b_size: z.union([z.string(), z.number()]).optional(),
  c_size: z.union([z.string(), z.number()]).optional(),
  d_size: z.union([z.string(), z.number()]).optional(),
  h_size: z.union([z.string(), z.number()]).optional(),
  price_in_inr: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
  price_in_usd: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
  hollowbody_price_in_inr: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
  hollowbody_price_in_usd: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
  fullbody_price_in_inr: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
  fullbody_price_in_usd: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
});

const updateProductPriceSchema = z.object({
  name: z.string().optional(),
  a_size: z.union([z.string(), z.number()]).optional(),
  b_size: z.union([z.string(), z.number()]).optional(),
  c_size: z.union([z.string(), z.number()]).optional(),
  d_size: z.union([z.string(), z.number()]).optional(),
  h_size: z.union([z.string(), z.number()]).optional(),
  price_in_inr: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
  price_in_usd: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
  hollowbody_price_in_inr: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
  hollowbody_price_in_usd: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
  fullbody_price_in_inr: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
  fullbody_price_in_usd: z.union([z.string().transform((val) => parseFloat(val)), z.number()]).pipe(z.number().positive()).optional(),
});

module.exports = {
  createProductPriceSchema,
  updateProductPriceSchema,
};