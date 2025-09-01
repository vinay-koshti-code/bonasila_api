/**
 * @swagger
 * /v1/admin/page-items/{id}:
 *   delete:
 *     summary: Delete page list item
 *     tags: [Admin - Page Items Management]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Page item ID
 *     responses:
 *       200:
 *         description: Page item deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Page list item deleted successfully"
 *       404:
 *         description: Page item not found
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
 *                   example: "Page list item not found"
 *       500:
 *         description: Server error
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
 *                   example: "Something went wrong"
 *
 *   post:
 *     summary: Create page list item
 *     tags: [Admin - Page Items Management]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - page_type
 *               - list_type
 *             properties:
 *               page_type:
 *                 type: string
 *                 enum: [home_page, about_page, career_page, contact_page, ffactor_page, beyond_boundary_page, diy_page, faq_page, alliance_page, press_release_page, catalogues_page, gallery_page]
 *               list_type:
 *                 type: string
 *                 enum: [plant_lover_steps, brand, product, name_list, slider, client_list]
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image_url:
 *                 type: string
 *                 format: binary
 *                 description: "Page list item image"
 *               image_alt:
 *                 type: string
 *               link_url:
 *                 type: string
 *               order_no:
 *                 type: integer
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePageListItem'
 *     responses:
 *       201:
 *         description: Page item created successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */