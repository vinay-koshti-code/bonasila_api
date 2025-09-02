/**
 * @swagger
 * /v1/admin/contact/export/excel:
 *   get:
 *     summary: Export contacts to Excel
 *     tags: [Admin Management - Contacts]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: integer
 *           enum: [0, 1]
 *         description: Filter by contact status
 *       - in: query
 *         name: request_type
 *         schema:
 *           type: string
 *           enum: [design_for_us, business_request, inquiry, buying_request, contact_request, newsletter_request, alliance_request, career_request, faq_request, catalogue_request]
 *         description: Filter by request type
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Search by contact name
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Search by email address
 *       - in: query
 *         name: phone
 *         schema:
 *           type: string
 *         description: Search by phone number
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         description: Search by city
 *       - in: query
 *         name: company
 *         schema:
 *           type: string
 *         description: Search by company name
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, request_type, name, email, phone, city, company, posted_date, status]
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
 *         description: Excel file generated successfully
 *         content:
 *           application/vnd.openxmlformats-officedocument.spreadsheetml.sheet:
 *             schema:
 *               type: string
 *               format: binary
 *         headers:
 *           Content-Disposition:
 *             description: Attachment filename
 *             schema:
 *               type: string
 *               example: "attachment; filename=contacts_2024-01-15.xlsx"
 *           Content-Type:
 *             description: Excel MIME type
 *             schema:
 *               type: string
 *               example: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Unauthorized access"
 *       500:
 *         description: Excel export failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Excel export failed"
 */