/**
 * @swagger
 * /v1/admin/page-items:
 *   get:
 *     summary: Get all page list items
 *     tags: [Admin - Page Items Management]
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
 *         name: page_type
 *         schema:
 *           type: string
 *           enum: [home_page, about_page, career_page, contact_page, ffactor_page, beyond_boundary_page, diy_page, faq_page, alliance_page, press_release_page, catalogues_page, gallery_page]
 *         description: Filter by page type
 *       - in: query
 *         name: list_type
 *         schema:
 *           type: string
 *           enum: [plant_lover_steps, brand, product, name_list, slider, client_list]
 *         description: Filter by list type
 *       - in: query
 *         name: status
 *         schema:
 *           type: integer
 *           enum: [0, 1, 2]
 *         description: Filter by status
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Search by title
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, title, page_type, list_type, order_no, status, created_on]
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
 *         description: Page items fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/PageListItem'
 *                 message:
 *                   type: string
 *                   example: "Page list items fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
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
 *                 example: "home_page"
 *               list_type:
 *                 type: string
 *                 enum: [plant_lover_steps, brand, product, name_list, slider, client_list]
 *                 example: "slider"
 *               title:
 *                 type: string
 *                 example: "Premium Collection"
 *               description:
 *                 type: string
 *                 example: "Our finest plant pots for discerning customers"
 *               image_url:
 *                 type: string
 *                 format: binary
 *                 description: "Page list item image"
 *               image_alt:
 *                 type: string
 *                 example: "Premium plant pot collection"
 *               link_url:
 *                 type: string
 *                 example: "/collections/premium"
 *               order_no:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *                 default: 1
 *     responses:
 *       201:
 *         description: Page item created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/PageListItem'
 *                 message:
 *                   type: string
 *                   example: "Page list item created successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/page-items/{id}:
 *   get:
 *     summary: Get page list item by ID
 *     tags: [Admin - Page Items Management]
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
 *         description: Page item fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/PageListItem'
 *                 message:
 *                   type: string
 *                   example: "Page list item fetched successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 *   put:
 *     summary: Update page list item
 *     tags: [Admin - Page Items Management]
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
 *               image_alt:
 *                 type: string
 *               link_url:
 *                 type: string
 *               order_no:
 *                 type: integer
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *     responses:
 *       200:
 *         description: Page item updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/PageListItem'
 *                 message:
 *                   type: string
 *                   example: "Page list item updated successfully"
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
 *     responses:
 *       200:
 *         description: Page item deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Page list item deleted successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 * /v1/admin/page-items/status/{id}:
 *   patch:
 *     summary: Toggle page list item status
 *     tags: [Admin - Page Items Management]
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
 *         description: Page item status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Page list item status updated successfully"
 *                 status:
 *                   type: boolean
 *                   example: true
 *       404:
 *         $ref: '#/components/responses/NotFound'
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */