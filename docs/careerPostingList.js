/**
 * @swagger
 * components:
 *   schemas:
 *     CareerPostingList:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         posting_title:
 *           type: string
 *           example: "Senior Product Designer"
 *           description: "Job position title"
 *         apply_for_this_text:
 *           type: string
 *           example: "Ready to join our design team? Apply now and be part of creating beautiful plant pots."
 *           description: "Call-to-action text for application"
 *         posting_subtitle:
 *           type: string
 *           example: "Full-time • Design Team"
 *           description: "Job posting subtitle"
 *         posting_location:
 *           type: string
 *           example: "Mumbai, India"
 *           description: "Job location"
 *         posting_description:
 *           type: string
 *           example: "We're looking for a creative designer to join our team and help create innovative plant pot designs."
 *           description: "Job description"
 *         about_title:
 *           type: string
 *           example: "About This Role"
 *           description: "About section title"
 *         about_description:
 *           type: string
 *           example: "As a Senior Product Designer, you'll lead design initiatives and collaborate with cross-functional teams."
 *           description: "About section description"
 *         usual_day_title:
 *           type: string
 *           example: "A Usual Day"
 *           description: "Daily responsibilities title"
 *         usual_day_description:
 *           type: string
 *           example: "You'll sketch new designs, collaborate with the production team, and review prototypes."
 *           description: "Daily responsibilities description"
 *         eligibility_title:
 *           type: string
 *           example: "Eligibility Criteria"
 *           description: "Requirements title"
 *         eligibility_description:
 *           type: string
 *           example: "Bachelor's degree in Design, 3+ years experience, proficiency in design software."
 *           description: "Requirements description"
 *         additional_info_title:
 *           type: string
 *           example: "Additional Information"
 *           description: "Additional info title"
 *         additional_info_description:
 *           type: string
 *           example: "Competitive salary, health benefits, flexible working hours, and creative freedom."
 *           description: "Additional info description"
 *         how_to_apply_title:
 *           type: string
 *           example: "How to Apply"
 *           description: "Application process title"
 *         how_to_apply_description:
 *           type: string
 *           example: "Send your resume and portfolio to careers@bonasila.com with the subject line 'Senior Product Designer'."
 *           description: "Application process description"
 *         status:
 *           type: integer
 *           enum: [0, 1, 2]
 *           example: 1
 *           description: "0=inactive, 1=active, 2=deleted"
 *         created_on:
 *           type: string
 *           format: date-time
 *         updated_on:
 *           type: string
 *           format: date-time
 *         deleted_on:
 *           type: string
 *           format: date-time
 *           nullable: true
 *
 *     CreateCareerPostingList:
 *       type: object
 *       required:
 *         - posting_title
 *         - posting_location
 *       properties:
 *         posting_title:
 *           type: string
 *           example: "Marketing Manager"
 *           description: "Job position title"
 *         apply_for_this_text:
 *           type: string
 *           example: "Join our marketing team and help spread the word about our beautiful plant pots."
 *           description: "Call-to-action text for application"
 *         posting_subtitle:
 *           type: string
 *           example: "Full-time • Marketing Department"
 *           description: "Job posting subtitle"
 *         posting_location:
 *           type: string
 *           example: "Delhi, India"
 *           description: "Job location"
 *         posting_description:
 *           type: string
 *           example: "We're seeking a dynamic marketing professional to drive our brand growth and customer engagement."
 *           description: "Job description"
 *         about_title:
 *           type: string
 *           example: "About This Position"
 *           description: "About section title"
 *         about_description:
 *           type: string
 *           example: "Lead marketing campaigns, manage social media, and develop brand strategies."
 *           description: "About section description"
 *         usual_day_title:
 *           type: string
 *           example: "Your Daily Tasks"
 *           description: "Daily responsibilities title"
 *         usual_day_description:
 *           type: string
 *           example: "Plan campaigns, analyze metrics, create content, and coordinate with the sales team."
 *           description: "Daily responsibilities description"
 *         eligibility_title:
 *           type: string
 *           example: "Requirements"
 *           description: "Requirements title"
 *         eligibility_description:
 *           type: string
 *           example: "MBA in Marketing, 2+ years experience, strong analytical skills."
 *           description: "Requirements description"
 *         additional_info_title:
 *           type: string
 *           example: "What We Offer"
 *           description: "Additional info title"
 *         additional_info_description:
 *           type: string
 *           example: "Competitive package, performance bonuses, learning opportunities."
 *           description: "Additional info description"
 *         how_to_apply_title:
 *           type: string
 *           example: "Application Process"
 *           description: "Application process title"
 *         how_to_apply_description:
 *           type: string
 *           example: "Submit your application through our careers portal or email us directly."
 *           description: "Application process description"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 *           description: "0=inactive, 1=active"
 *
 * /v1/admin/career-posting-list:
 *   get:
 *     summary: Get all job postings with pagination and filtering
 *     tags: [Admin - Posting List Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *       - in: query
 *         name: posting_title
 *         schema:
 *           type: string
 *         description: Search by job title
 *       - in: query
 *         name: posting_location
 *         schema:
 *           type: string
 *         description: Search by location
 *       - in: query
 *         name: status
 *         schema:
 *           type: integer
 *           enum: [0, 1]
 *         description: Filter by status (0=inactive, 1=active)
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, posting_title, posting_location, status, created_on]
 *         description: Sort field
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: asc
 *         description: Sort order
 *     responses:
 *       200:
 *         description: Job postings fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CareerPostingList'
 *                 message:
 *                   type: string
 *                   example: "Job postings fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: No job postings found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create a new job posting
 *     tags: [Admin - Posting List Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCareerPostingList'
 *     responses:
 *       201:
 *         description: Job posting created successfully
 *       400:
 *         description: Validation error or creation failed
 *       500:
 *         description: Server error
 *
 * /v1/admin/career-posting-list/{id}:
 *   get:
 *     summary: Get job posting by ID
 *     tags: [Admin - Posting List Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Job posting ID
 *     responses:
 *       200:
 *         description: Job posting fetched successfully
 *       404:
 *         description: Job posting not found
 *       500:
 *         description: Server error
 *
 *   put:
 *     summary: Update job posting
 *     tags: [Admin - Posting List Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Job posting ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCareerPostingList'
 *     responses:
 *       200:
 *         description: Job posting updated successfully
 *       404:
 *         description: Job posting not found
 *       400:
 *         description: Update failed
 *       500:
 *         description: Server error
 *
 *   delete:
 *     summary: Delete job posting (soft delete)
 *     tags: [Admin - Posting List Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Job posting ID
 *     responses:
 *       200:
 *         description: Job posting deleted successfully
 *       404:
 *         description: Job posting not found
 *       500:
 *         description: Server error
 *
 * /v1/admin/career-posting-list/status/{id}:
 *   patch:
 *     summary: Toggle job posting status
 *     tags: [Admin - Posting List Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Job posting ID
 *     responses:
 *       200:
 *         description: Job posting status updated successfully
 *       404:
 *         description: Job posting not found
 *       500:
 *         description: Server error
 */
