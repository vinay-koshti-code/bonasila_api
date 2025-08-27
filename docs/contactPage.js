/**
 * @swagger
 * components:
 *   schemas:
 *     ContactPage:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *           description: "Always 1 - single contact page record"
 *         tag_link:
 *           type: string
 *           example: "/contact"
 *           description: "Contact page tag link"
 *         header_description:
 *           type: string
 *           example: "Get in touch with us for any inquiries about our premium plant pots"
 *           description: "Header section description"
 *         form_title:
 *           type: string
 *           example: "Send us a Message"
 *           description: "Contact form title"
 *         form_footer_details:
 *           type: string
 *           example: "We'll get back to you within 24 hours"
 *           description: "Form footer details"
 *         form_footer_highlights:
 *           type: string
 *           example: "Quick Response • Expert Support • Quality Service"
 *           description: "Form footer highlights"
 *         sales_person:
 *           type: string
 *           example: "John Smith"
 *           description: "Sales representative name"
 *         sales_person_position:
 *           type: string
 *           example: "Sales Manager"
 *           description: "Sales representative position"
 *         sales_person_info:
 *           type: string
 *           example: "John has been helping customers find the perfect plant pots for over 5 years"
 *           description: "Sales representative information"
 *         sales_person_image:
 *           type: string
 *           example: "uploads/contact/sales-rep.jpg"
 *           description: "Sales representative photo"
 *         address_info:
 *           type: string
 *           example: "Visit our showroom to see our complete collection"
 *           description: "Address section information"
 *         phone_1:
 *           type: string
 *           example: "+91-9876543210"
 *           description: "Primary phone number"
 *         phone_2:
 *           type: string
 *           example: "+91-9876543211"
 *           description: "Secondary phone number"
 *         phone_3:
 *           type: string
 *           example: "+91-9876543212"
 *           description: "Tertiary phone number"
 *         email:
 *           type: string
 *           example: "contact@bonasila.com"
 *           description: "Contact email address"
 *         company_name:
 *           type: string
 *           example: "Bonasila Plant Pots Pvt Ltd"
 *           description: "Company name"
 *         address:
 *           type: string
 *           example: "123 Garden Street, Plant City, PC 12345"
 *           description: "Company address"
 *         footer_image:
 *           type: string
 *           example: "uploads/contact/footer-banner.jpg"
 *           description: "Footer section image"
 *         image_alt:
 *           type: string
 *           example: "Bonasila showroom exterior"
 *           description: "Footer image alt text"
 *         footer_title:
 *           type: string
 *           example: "Visit Our Showroom"
 *           description: "Footer section title"
 *         footer_link:
 *           type: string
 *           example: "/showroom"
 *           description: "Footer section link"
 *         footer_link_title:
 *           type: string
 *           example: "Find Directions"
 *           description: "Footer link title"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           example: 1
 *           description: "0=inactive, 1=active"
 *         created_on:
 *           type: string
 *           format: date-time
 *         updated_on:
 *           type: string
 *           format: date-time
 *
 * /v1/admin/contact-page:
 *   get:
 *     summary: Get contact page content
 *     tags: [Admin - Contact Page Management]
 *     security:
 *       - bearerAuth: []
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
 *         description: Contact page content not found
 *       500:
 *         description: Server error
 *
 *   post:
 *     summary: Create or update contact page content
 *     tags: [Admin - Contact Page Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tag_link:
 *                 type: string
 *                 example: "/contact-us"
 *               header_description:
 *                 type: string
 *                 example: "We'd love to hear from you. Contact us for any questions about our products"
 *               form_title:
 *                 type: string
 *                 example: "Get in Touch"
 *               form_footer_details:
 *                 type: string
 *                 example: "Our team responds to all inquiries within 24 hours"
 *               form_footer_highlights:
 *                 type: string
 *                 example: "Fast Response • Expert Advice • Quality Products"
 *               sales_person:
 *                 type: string
 *                 example: "Sarah Johnson"
 *               sales_person_position:
 *                 type: string
 *                 example: "Customer Relations Manager"
 *               sales_person_info:
 *                 type: string
 *                 example: "Sarah is here to help you find the perfect plant pots for your needs"
 *               sales_person_image:
 *                 type: string
 *                 example: "uploads/contact/sarah-johnson.jpg"
 *               address_info:
 *                 type: string
 *                 example: "Come visit our beautiful showroom and see our products firsthand"
 *               phone_1:
 *                 type: string
 *                 example: "+91-1234567890"
 *               phone_2:
 *                 type: string
 *                 example: "+91-1234567891"
 *               phone_3:
 *                 type: string
 *                 example: "+91-1234567892"
 *               email:
 *                 type: string
 *                 example: "info@bonasila.com"
 *               company_name:
 *                 type: string
 *                 example: "Bonasila Premium Plant Pots"
 *               address:
 *                 type: string
 *                 example: "456 Pottery Lane, Ceramic City, CC 67890"
 *               footer_image:
 *                 type: string
 *                 example: "uploads/contact/showroom-image.jpg"
 *               image_alt:
 *                 type: string
 *                 example: "Bonasila showroom with beautiful plant pot displays"
 *               footer_title:
 *                 type: string
 *                 example: "Experience Our Showroom"
 *               footer_link:
 *                 type: string
 *                 example: "/visit-us"
 *               footer_link_title:
 *                 type: string
 *                 example: "Plan Your Visit"
 *     responses:
 *       200:
 *         description: Content updated successfully
 *       201:
 *         description: Content created successfully
 *       500:
 *         description: Server error
 *
 * /v1/admin/contact-page/status:
 *   patch:
 *     summary: Toggle contact page status
 *     tags: [Admin - Contact Page Management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       404:
 *         description: Page content not found
 *       500:
 *         description: Server error
 */
