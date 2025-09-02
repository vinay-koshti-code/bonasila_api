const { z } = require('zod');

const pressReleaseSectionSchema = z.object({
  tag_line: z.string().min(1, 'Tag line is required'),
  header_description: z.string().min(1, 'Header description is required'),
});

module.exports = {
  pressReleaseSectionSchema,
};