const { z } = require('zod');

const aboutPageTeamSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  position: z.string().min(1, 'Position is required'),
  description: z.string().optional(),
  facebook_link: z.string().optional(),
  instagram_link: z.string().optional(),
  linkedin_link: z.string().optional(),
  // image: z.string().optional(),
  image_alt: z.string().optional(),
  status: z.union([z.string().transform((val) => parseInt(val, 10)), z.number().min(0).max(1)]).optional(),
});

module.exports = {
  createAboutPageTeamSchema: aboutPageTeamSchema,
  updateAboutPageTeamSchema: aboutPageTeamSchema.partial(),
};