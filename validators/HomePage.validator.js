const { z } = require('zod');

const homePageSchema = z.object({
  slide_title: z.string().optional(),
  slide_image: z.string().optional(),
  pushup_link: z.string().optional(),
  pushup_link_title: z.string().optional(),
  pushup_header: z.string().optional(),
  pushup_description: z.string().optional(),
  pushup_description_1: z.string().optional(),
  pushup_link_1: z.string().optional(),
  pushup_link_title_1: z.string().optional(),
  pushup_description_2: z.string().optional(),
  video_file_autoplay: z.string().optional(),
  plant_lover_title: z.string().optional(),
  plant_lover_content: z.string().optional(),
  slider_title: z.string().optional(),
  slider_content: z.string().optional(),
  slider_footer_title: z.string().optional(),
  slider_footer_content: z.string().optional(),
  client_title: z.string().optional(),
  client_image: z.string().optional(),
  client_image_alt: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  homePageSchema: homePageSchema,
};