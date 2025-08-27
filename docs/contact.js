/**
 * @swagger
 * components:
 *   schemas:
 *     ContactRequest:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           example: 1
 *         request_type:
 *           type: string
 *           enum: [design_for_us, business_request, inquiry, buying_request, contact_request, newsletter_request, alliance_request, career_request, faq_request, catalogue_request]
 *           example: "contact_request"
 *         name:
 *           type: string
 *           example: "John Doe"
 *         phone:
 *           type: string
 *           example: "+1234567890"
 *         email:
 *           type: string
 *           format: email
 *           example: "john.doe@example.com"
 *         city:
 *           type: string
 *           example: "New York"
 *         company:
 *           type: string
 *           example: "ABC Corp"
 *         message:
 *           type: string
 *           example: "I would like to inquire about your products"
 *         file:
 *           type: string
 *           example: "uploads/files/document.pdf"
 *         posted_date:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T10:30:00Z"
 *         status:
 *           type: integer
 *           enum: [0, 1, 2]
 *           example: 1
 *           description: "0=inactive, 1=active, 2=deleted"
 *         extra:
 *           type: object
 *           description: "Additional fields based on request type"
 *           example: {}
 *
 *     CreateContactRequest:
 *       type: object
 *       required:
 *         - request_type
 *       properties:
 *         request_type:
 *           type: string
 *           enum: [design_for_us, business_request, inquiry, buying_request, contact_request, newsletter_request, alliance_request, career_request, faq_request, catalogue_request]
 *           example: "contact_request"
 *         name:
 *           type: string
 *           example: "John Doe"
 *         phone:
 *           type: string
 *           example: "+1234567890"
 *         email:
 *           type: string
 *           format: email
 *           example: "john.doe@example.com"
 *         city:
 *           type: string
 *           example: "New York"
 *         company:
 *           type: string
 *           example: "ABC Corp"
 *         message:
 *           type: string
 *           example: "I would like to inquire about your products"
 *         file:
 *           type: string
 *           example: "uploads/files/document.pdf"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 *         extra:
 *           type: object
 *           description: "Additional fields based on request type"
 *           example: {}
 *
 *     DesignForUsRequest:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateContactRequest'
 *         - type: object
 *           properties:
 *             request_type:
 *               type: string
 *               enum: [design_for_us]
 *               example: "design_for_us"
 *             name:
 *               type: string
 *               example: "Jane Smith"
 *             phone:
 *               type: string
 *               example: "+1234567890"
 *             email:
 *               type: string
 *               format: email
 *               example: "jane.smith@example.com"
 *             city:
 *               type: string
 *               example: "Los Angeles"
 *             message:
 *               type: string
 *               example: "I need custom planters designed"
 *             file:
 *               type: string
 *               example: "uploads/designs/sketch.pdf"
 *
 *     BusinessRequest:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateContactRequest'
 *         - type: object
 *           properties:
 *             request_type:
 *               type: string
 *               enum: [business_request]
 *               example: "business_request"
 *             name:
 *               type: string
 *               example: "Mike Johnson"
 *             phone:
 *               type: string
 *               example: "+1234567890"
 *             email:
 *               type: string
 *               format: email
 *               example: "mike@business.com"
 *             city:
 *               type: string
 *               example: "Chicago"
 *
 *     InquiryRequest:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateContactRequest'
 *         - type: object
 *           properties:
 *             request_type:
 *               type: string
 *               enum: [inquiry]
 *               example: "inquiry"
 *             name:
 *               type: string
 *               example: "Sarah Wilson"
 *             phone:
 *               type: string
 *               example: "+1234567890"
 *             email:
 *               type: string
 *               format: email
 *               example: "sarah@example.com"
 *             city:
 *               type: string
 *               example: "Miami"
 *             message:
 *               type: string
 *               example: "General inquiry about products"
 *
 *     BuyingRequest:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateContactRequest'
 *         - type: object
 *           properties:
 *             request_type:
 *               type: string
 *               enum: [buying_request]
 *               example: "buying_request"
 *             name:
 *               type: string
 *               example: "David Brown"
 *             phone:
 *               type: string
 *               example: "+1234567890"
 *             email:
 *               type: string
 *               format: email
 *               example: "david@company.com"
 *             city:
 *               type: string
 *               example: "Seattle"
 *             company:
 *               type: string
 *               example: "Garden Solutions Inc"
 *             message:
 *               type: string
 *               example: "Interested in bulk purchase"
 *             extra:
 *               type: object
 *               properties:
 *                 planter_name:
 *                   type: string
 *                   example: "Classic Terracotta Pot"
 *
 *     NewsletterRequest:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateContactRequest'
 *         - type: object
 *           properties:
 *             request_type:
 *               type: string
 *               enum: [newsletter_request]
 *               example: "newsletter_request"
 *             email:
 *               type: string
 *               format: email
 *               example: "subscriber@example.com"
 *
 *     AllianceRequest:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateContactRequest'
 *         - type: object
 *           properties:
 *             request_type:
 *               type: string
 *               enum: [alliance_request]
 *               example: "alliance_request"
 *             name:
 *               type: string
 *               example: "Robert Taylor"
 *             phone:
 *               type: string
 *               example: "+1234567890"
 *             email:
 *               type: string
 *               format: email
 *               example: "robert@partner.com"
 *             city:
 *               type: string
 *               example: "Denver"
 *             company:
 *               type: string
 *               example: "Partner Corp"
 *             extra:
 *               type: object
 *               properties:
 *                 current_line_of_business:
 *                   type: string
 *                   example: "Garden supplies retail"
 *                 website:
 *                   type: string
 *                   format: uri
 *                   example: "https://partner.com"
 *                 workforce:
 *                   type: integer
 *                   example: 50
 *                 comments:
 *                   type: string
 *                   example: "Looking for partnership opportunities"
 *                 mail_status:
 *                   type: integer
 *                   enum: [0, 1]
 *                   example: 1
 *                 mail_message:
 *                   type: string
 *                   example: "Partnership proposal sent"
 *
 *     CareerRequest:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateContactRequest'
 *         - type: object
 *           properties:
 *             request_type:
 *               type: string
 *               enum: [career_request]
 *               example: "career_request"
 *             name:
 *               type: string
 *               example: "Emily Davis"
 *             phone:
 *               type: string
 *               example: "+1234567890"
 *             email:
 *               type: string
 *               format: email
 *               example: "emily@example.com"
 *             company:
 *               type: string
 *               example: "Previous Employer"
 *             file:
 *               type: string
 *               example: "uploads/resumes/emily_resume.pdf"
 *             extra:
 *               type: object
 *               properties:
 *                 position:
 *                   type: string
 *                   example: "Marketing Manager"
 *                 cv_file:
 *                   type: string
 *                   format: uri
 *                   example: "uploads/resumes/emily_cv.pdf"
 *
 *     FAQRequest:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateContactRequest'
 *         - type: object
 *           properties:
 *             request_type:
 *               type: string
 *               enum: [faq_request]
 *               example: "faq_request"
 *             name:
 *               type: string
 *               example: "Alex Johnson"
 *             phone:
 *               type: string
 *               example: "+1234567890"
 *             email:
 *               type: string
 *               format: email
 *               example: "alex@example.com"
 *             extra:
 *               type: object
 *               properties:
 *                 question:
 *                   type: string
 *                   example: "What materials are your planters made from?"
 *
 *     CatalogueRequest:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateContactRequest'
 *         - type: object
 *           properties:
 *             request_type:
 *               type: string
 *               enum: [catalogue_request]
 *               example: "catalogue_request"
 *             name:
 *               type: string
 *               example: "Lisa Anderson"
 *             phone:
 *               type: string
 *               example: "+1234567890"
 *             email:
 *               type: string
 *               format: email
 *               example: "lisa@example.com"
 *             city:
 *               type: string
 *               example: "Portland"
 *
 * /v1/admin/contact/:
 *   get:
 *     summary: Get all contact requests with pagination and filtering
 *     tags: [Admin - Contact Management]
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
 *         name: request_type
 *         schema:
 *           type: string
 *           enum: [design_for_us, business_request, inquiry, buying_request, contact_request, newsletter_request, alliance_request, career_request, faq_request, catalogue_request]
 *         description: Filter by request type
 *       - in: query
 *         name: status
 *         schema:
 *           type: integer
 *           enum: [0, 1, 2]
 *         description: Filter by status (0=inactive, 1=active, 2=deleted)
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, posted_date, request_type, status]
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
 *         description: Requests fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/ContactRequest'
 *                 message:
 *                   type: string
 *                   example: "Requests fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: No requests found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No Requests found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 * /v1/web/contact/:
 *   post:
 *     summary: Create a new contact request
 *     tags: [WEB - Contact Requests]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *               - $ref: '#/components/schemas/DesignForUsRequest'
 *               - $ref: '#/components/schemas/BusinessRequest'
 *               - $ref: '#/components/schemas/InquiryRequest'
 *               - $ref: '#/components/schemas/BuyingRequest'
 *               - $ref: '#/components/schemas/NewsletterRequest'
 *               - $ref: '#/components/schemas/AllianceRequest'
 *               - $ref: '#/components/schemas/CareerRequest'
 *               - $ref: '#/components/schemas/FAQRequest'
 *               - $ref: '#/components/schemas/CatalogueRequest'
 *               - $ref: '#/components/schemas/CreateContactRequest'
 *           examples:
 *             contact_request:
 *               summary: Contact Request
 *               value:
 *                 request_type: "contact_request"
 *                 name: "John Doe"
 *                 phone: "+1234567890"
 *                 email: "john@example.com"
 *                 city: "New York"
 *                 company: "ABC Corp"
 *                 message: "I would like to know more about your products"
 *             newsletter_request:
 *               summary: Newsletter Subscription
 *               value:
 *                 request_type: "newsletter_request"
 *                 email: "subscriber@example.com"
 *             alliance_request:
 *               summary: Alliance Request
 *               value:
 *                 request_type: "alliance_request"
 *                 name: "Robert Taylor"
 *                 phone: "+1234567890"
 *                 email: "robert@partner.com"
 *                 city: "Denver"
 *                 company: "Partner Corp"
 *                 extra:
 *                   current_line_of_business: "Garden supplies retail"
 *                   website: "https://partner.com"
 *                   workforce: 50
 *                   comments: "Looking for partnership opportunities"
 *     responses:
 *       201:
 *         description: Request created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ContactRequest'
 *                 message:
 *                   type: string
 *                   example: "Request created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Validation error or creation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                   description: Validation errors
 *                 message:
 *                   type: string
 *                   example: "Request not created"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 * /v1/admin/contact/{id}:
 *   get:
 *     summary: Get contact request by ID
 *     tags: [Admin - Contact Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Request fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ContactRequest'
 *                 message:
 *                   type: string
 *                   example: "Request fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Request not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Request not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 *   put:
 *     summary: Update contact request
 *     tags: [Admin - Contact Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateContactRequest'
 *     responses:
 *       200:
 *         description: Request updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ContactRequest'
 *                 message:
 *                   type: string
 *                   example: "Request updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Request not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Request not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       400:
 *         description: Update failed or validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                   description: Validation errors
 *                 message:
 *                   type: string
 *                   example: "Request update failed"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 *   delete:
 *     summary: Delete contact request (soft delete)
 *     tags: [Admin - Contact Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Request deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Request deleted successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Request not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Request not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 *
 * /v1/admin/contact/status/{id}:
 *   patch:
 *     summary: Toggle contact request status
 *     tags: [Admin - Contact Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Request status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Request status updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         description: Request not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Request not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Something went wrong"
 *                 status:
 *                   type: boolean
 *                   example: false
 */
