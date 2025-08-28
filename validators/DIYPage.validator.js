const { z } = require('zod');

const diyPageSchema = z.object({
  tag_line: z.string().optional(),
  video_file: z.string().optional(),
  bottom_title_link: z.string().optional(),
  bottom_title: z.string().optional(),
  bottom_allow_files: z.string().optional(),
  bottom_info: z.string().optional(),
  bottom_content: z.string().optional(),
  popup_title: z.string().optional(),
  popup_content: z.string().optional(),
  popup_file: z.string().optional(),
  footer_text: z.string().optional(),
  list_footer: z.string().optional(),
  list_header: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  diyPageSchema: diyPageSchema,
};