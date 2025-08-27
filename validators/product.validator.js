const { z } = require('zod');

const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  tag_line: z.string().min(1, 'Tag line is required'),
  listing_name: z.string().min(1, 'Listing name is required'),
  slider_title: z.string().min(1, 'Slider title is required'),
  slider_description: z.string().min(1, 'Slider description is required'),
  popup_title: z.string().min(1, 'Popup title is required'),
  popup_content: z.string().min(1, 'Popup content is required'),
  // popup_image: z.string().optional(),
  popup_image_alt: z.string().optional(),
  price_type: z.string().min(1, 'Price type is required'),
  // menu_image: z.string().optional(),
  menu_image_alt: z.string().optional(),
  description: z.string().min(1, 'Description is required'),
  title: z.string().min(1, 'Title is required'),
  collection_id: z.number({ message: "collection is required"}),
  // size_image: z.string().optional(),
  product_sizes: z.string().min(1, "Product Sizes are required")
  // status: z.number().int().min(0).max(1).default(1).optional(), // Status for create/update
});

module.exports = {
  createProductSchema: productSchema,
  updateProductSchema: productSchema.partial(),
};