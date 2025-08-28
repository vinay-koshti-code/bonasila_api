const { z } = require('zod');

const aboutPageSchema = z.object({
  tag_line: z.string().optional(),
  header: z.string().optional(),
  sub_header: z.string().optional(),
  header_image: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  aboutPageSchema: aboutPageSchema,
};