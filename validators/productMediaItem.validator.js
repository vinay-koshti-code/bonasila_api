const { z } = require('zod');

const productMediaItemSchema = z.object({
  media_id: z.union([z.string().transform((val) => parseInt(val, 10)), z.number()]).pipe(z.number({ message: "Media id is required"})),
  file_alt: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createProductMediaItemSchema: productMediaItemSchema,
  updateProductMediaItemSchema: productMediaItemSchema.partial().omit({ media_id: true }),
};