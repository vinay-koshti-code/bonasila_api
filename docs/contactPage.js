/**
 * @swagger
 * /v1/admin/contact-page:
 *   get:
 *     summary: Get contact page content
 *     tags: [Admin - Contact Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Contact page content fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ContactPage'
 *                 message:
 *                   type: string
 *                   example: "Contact page content fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   post:
 *     summary: Create or update contact page content
 *     tags: [Admin - Contact Page Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               tag_link:
 *                 type: string
 *                 example: "/contact"
 *               header_description:
 *                 type: string
 *                 example: "Get in touch with us for any inquiries"
 *               form_title:
 *                 type: string
 *                 example: "Send us a Message"
 *               form_footer_details:
 *                 type: string
 *                 example: "We'll get back to you within 24 hours"
 *               form_footer_highlights:
 *                 type: string
 *                 example: "Quick Response • Expert Support"
 *               sales_person:
 *                 type: string
 *                 example: "John Smith"
 *               sales_person_position:
 *                 type: string
 *                 example: "Sales Manager"
 *               sales_person_info:
 *                 type: string
 *                 example: "John has been helping customers"
 *               sales_person_image:
 *                 type: string
 *                 format: binary
 *               address_info:
 *                 type: string
 *                 example: "Visit our showroom"
 *               phone_1:
 *                 type: string
 *                 example: "+91-9876543210"
 *               phone_2:
 *                 type: string
 *                 example: "+91-9876543211"
 *               phone_3:
 *                 type: string
 *                 example: "+91-9876543212"
 *               email:
 *                 type: string
 *                 example: "contact@bonasila.com"
 *               company_name:
 *                 type: string
 *                 example: "Bonasila Plant Pots Pvt Ltd"
 *               address:
 *                 type: string
 *                 example: "123 Garden Street, Plant City"
 *               footer_image:
 *                 type: string
 *                 format: binary
 *               image_alt:
 *                 type: string
 *                 example: "Bonasila showroom exterior"
 *               footer_title:
 *                 type: string
 *                 example: "Visit Our Showroom"
 *               footer_link:
 *                 type: string
 *                 example: "/showroom"
 *               footer_link_title:
 *                 type: string
 *                 example: "Find Directions"
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       200:
 *         description: Content updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ContactPage'
 *                 message:
 *                   type: string
 *                   example: "Contact page content updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       201:
 *         description: Content created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/ContactPage'
 *                 message:
 *                   type: string
 *                   example: "Contact page content created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/contact-page/status:
 *   patch:
 *     summary: Toggle contact page status
 *     tags: [Admin - Contact Page Management]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Contact page status updated to active"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */