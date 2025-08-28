const { z } = require('zod');

const careerPageListsSchema = z.object({
  posting_title: z.string().min(1, 'Posting title is required'),
  apply_for_this_text: z.string().optional(),
  posting_subtitle: z.string().optional(),
  posting_location: z.string().min(1, 'Posting location is required'),
  posting_description: z.string().optional(),
  about_title: z.string().optional(),
  about_description: z.string().optional(),
  usual_day_title: z.string().optional(),
  usual_day_description: z.string().optional(),
  eligibility_title: z.string().optional(),
  eligibility_description: z.string().optional(),
  additional_info_title: z.string().optional(),
  additional_info_description: z.string().optional(),
  how_to_apply_title: z.string().optional(),
  how_to_apply_description: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createCareerPageListsSchema: careerPageListsSchema,
  updateCareerPageListsSchema: careerPageListsSchema.partial(),
};