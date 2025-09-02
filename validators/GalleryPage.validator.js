const { z } = require('zod');

const galleryPageSchema = z.object({
  video: z.string().optional(),
  image: z.string().optional(),
  image_alt: z.string().min(1, 'Image alt text is required'),
  youtube_video_link: z.string().optional().or(z.literal('')),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createGalleryPageSchema: galleryPageSchema,
  updateGalleryPageSchema: galleryPageSchema.partial(),
};