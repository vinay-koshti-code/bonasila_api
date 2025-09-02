const { z } = require("zod");

const createPressReleasePageSchema = z.object({
  title: z.string(),
  category: z.string(),
  date: z.date(),
  image_alt: z.string(),
  header: z.string(),
  image_title: z.string(), 
  description: z.string(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

const updatePressReleasePageSchema = z.object({
  title: z.string().optional(),
  category: z.string().optional(),
  date: z.date().optional(),
  image_alt: z.string().optional(),
  header: z.string().optional(),
  image_title: z.string().optional(),
  description: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = { createPressReleasePageSchema, updatePressReleasePageSchema };
