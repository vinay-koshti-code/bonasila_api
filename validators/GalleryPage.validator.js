const { z } = require('zod');

const galleryPageSchema = z.object({
  file: z.string().min(1, 'File path or URL is required'),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createGalleryPageSchema: galleryPageSchema,
  updateGalleryPageSchema: galleryPageSchema.partial(),
};