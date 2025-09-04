/**
 * @swagger
 * /v1/admin/contact:
 *   get:
 *     summary: Get all contact requests with pagination and filtering
 *     tags: [Admin - Contact Management]
 *     security:
 *       - BearerAuth: []
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
 *         description: Filter by status
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create a new contact request
 *     tags: [Admin - Contact Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - request_type
 *             properties:
 *               request_type:
 *                 type: string
 *                 enum: [design_for_us, business_request, inquiry, buying_request, contact_request, newsletter_request, alliance_request, career_request, faq_request, catalogue_request]
 *                 example: "contact_request"
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john.doe@example.com"
 *               city:
 *                 type: string
 *                 example: "New York"
 *               company:
 *                 type: string
 *                 example: "ABC Corp"
 *               message:
 *                 type: string
 *                 example: "I would like to inquire about your products"
 *               file:
 *                 type: string
 *                 format: binary
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
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
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/contact/{id}:
 *   get:
 *     summary: Get contact request by ID
 *     tags: [Admin - Contact Management]
 *     security:
 *       - BearerAuth: []
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   put:
 *     summary: Update contact request
 *     tags: [Admin - Contact Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               request_type:
 *                 type: string
 *                 enum: [design_for_us, business_request, inquiry, buying_request, contact_request, newsletter_request, alliance_request, career_request, faq_request, catalogue_request]
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               city:
 *                 type: string
 *               company:
 *                 type: string
 *               message:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
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
 *         $ref: '#/components/responses/NotFound'
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   delete:
 *     summary: Delete contact request (soft delete)
 *     tags: [Admin - Contact Management]
 *     security:
 *       - BearerAuth: []
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/contact/status/{id}:
 *   patch:
 *     summary: Toggle contact request status
 *     tags: [Admin - Contact Management]
 *     security:
 *       - BearerAuth: []
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
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/web/contact:
 *   post:
 *     summary: Create a new contact request (public)
 *     tags: [Web API - Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - request_type
 *             properties:
 *               request_type:
 *                 type: string
 *                 enum: [design_for_us, business_request, inquiry, buying_request, contact_request, newsletter_request, alliance_request, career_request, faq_request, catalogue_request]
 *                 example: "contact_request"
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               phone:
 *                 type: string
 *                 example: "+1234567890"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "john@example.com"
 *               city:
 *                 type: string
 *                 example: "New York"
 *               company:
 *                 type: string
 *                 example: "ABC Corp"
 *               message:
 *                 type: string
 *                 example: "I would like to know more about your products"
 *               file:
 *                 type: string
 *                 format: binary
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
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */