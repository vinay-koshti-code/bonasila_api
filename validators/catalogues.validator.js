const { z } = require('zod');

const cataloguesPageSchema = z.object({
  form_title: z.string().optional(),
  pdf_title: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  cataloguesPageSchema: cataloguesPageSchema,
};