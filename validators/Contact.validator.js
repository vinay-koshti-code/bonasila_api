const { z } = require('zod');

// Base schema for common fields
const baseRequestSchema = z.object({
  request_type: z.enum([
    'design_for_us',
    'business_request',
    'inquiry',
    'buying_request',
    'contact_request',
    'newsletter_request',
    'alliance_request',
    'career_request',
    'faq_request',
    'catalogue_request'
  ], { message: 'Invalid request type' }),
  name: z.string({ message: 'Name must be a string' }).optional(),
  phone: z.string({ message: 'Phone must be a string' }).optional(),
  email: z.string({ message: 'Email must be a string' }).email({ message: 'Invalid email format' }).optional(),
  city: z.string({ message: 'City must be a string' }).optional(),
  company: z.string({ message: 'Company must be a string' }).optional(),
  message: z.string({ message: 'Message must be a string' }).optional(),
  file: z.string({ message: 'File must be a string' }).optional(),
  status: z.number({ message: 'Status must be a number' }).int({ message: 'Status must be an integer' }).min(0, { message: 'Status must be 0 or 1' }).max(1, { message: 'Status must be 0 or 1' }).optional(),
});

// Schemas for the 'extra' field based on request_type
const extraSchemas = {
  buying_request: z.object({
    planter_name: z.string({ message: 'Planter name must be a string' }).optional(),
  }),
  alliance_request: z.object({
    current_line_of_business: z.string({ message: 'Current line of business must be a string' }).optional(),
    website: z.string({ message: 'Website must be a string' }).url({ message: 'Website must be a valid URL' }).optional(),
    workforce: z.number({ message: 'Workforce must be a number' }).int({ message: 'Workforce must be an integer' }).min(0, { message: 'Workforce must be a positive number' }).optional(),
    comments: z.string({ message: 'Comments must be a string' }).optional(),
    mail_status: z.number({ message: 'Mail status must be a number' }).int({ message: 'Mail status must be an integer' }).min(0, { message: 'Mail status must be 0 or 1' }).max(1, { message: 'Mail status must be 0 or 1' }).optional(),
    mail_message: z.string({ message: 'Mail message must be a string' }).optional(),
  }),
  career_request: z.object({
    position: z.string({ message: 'Position must be a string' }).optional(),
  }),
  faq_request: z.object({
    question: z.string({ message: 'Question must be a string' }).optional(),
  }),
};

// Middleware to dynamically validate based on request_type
const dynamicRequestValidator = (req, res, next) => {
  try {
    const { request_type, extra, ...rest } = req.body;

    // Validate base fields
    const validatedBase = baseRequestSchema.parse({ request_type, ...rest });

    // Validate 'extra' field if a schema exists for the request type
    let validatedExtra = {};
    if (extraSchemas[request_type]) {
      validatedExtra = extraSchemas[request_type].parse(extra);
    } else {
      // If no specific schema, allow extra to be null or empty
      if (extra && Object.keys(extra).length > 0) {
        throw new Error(`Invalid or unexpected fields in 'extra' for type '${request_type}'`);
      }
    }

    req.validated = { ...validatedBase, extra: validatedExtra };
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ status: false, message: "Validation failed", errors: error.errors });
    }
    return res.status(400).json({ status: false, message: error.message });
  }
};

module.exports = {
  dynamicRequestValidator,
};