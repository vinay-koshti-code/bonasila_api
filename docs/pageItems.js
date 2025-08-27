/**
 * @swagger
 * components:
 *   schemas:
 *     PageListItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         page_type:
 *           type: string
 *           enum: [home_page, about_page, career_page, contact_page, ffactor_page, beyond_boundary_page, diy_page, faq_page, alliance_page, press_release_page, catalogues_page, gallery_page]
 *           example: "home_page"
 *           description: "Type of page this item belongs to"
 *         list_type:
 *           type: string
 *           example: "featured_products"
 *           description: "Type of list within the page"
 *         title:
 *           type: string
 *           example: "Premium Terracotta Collection"
 *           description: "Item title"
 *         description:
 *           type: string
 *           example: "Handcrafted terracotta pots perfect for indoor plants"
 *           description: "Item description"
 *         image_url:
 *           type: string
 *           example: "uploads/page-items/terracotta-collection.jpg"
 *           description: "Image URL for the item"
 *         link_url:
 *           type: string
 *           example: "/collections/terracotta"
 *           description: "Link URL for the item"
 *         order_no:
 *           type: integer
 *           example: 1
 *           description: "Display order of the item"
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
 *     CreatePageListItem:
 *       type: object
 *       required:
 *         - page_type
 *         - list_type
 *       properties:
 *         page_type:
 *           type: string
 *           enum: [home_page, about_page, career_page, contact_page, ffactor_page, beyond_boundary_page, diy_page, faq_page, alliance_page, press_release_page, catalogues_page, gallery_page]
 *           example: "home_page"
 *           description: "Type of page this item belongs to"
 *         list_type:
 *           type: string
 *           example: "hero_slides"
 *           description: "Type of list within the page"
 *         title:
 *           type: string
 *           example: "New Ceramic Collection"
 *           description: "Item title"
 *         description:
 *           type: string
 *           example: "Discover our latest ceramic planters with modern designs"
 *           description: "Item description"
 *         image_url:
 *           type: string
 *           example: "uploads/page-items/ceramic-hero.jpg"
 *           description: "Image URL for the item"
 *         link_url:
 *           type: string
 *           example: "/collections/ceramic"
 *           description: "Link URL for the item"
 *         order_no:
 *           type: integer
 *           example: 2
 *           description: "Display order of the item"
 *         status:
 *           type: integer
 *           enum: [0, 1]
 *           default: 1
 *           description: "0=inactive, 1=active"
 *
 * /v1/admin/page-items:
 *   get:
 *     summary: Get page list items with pagination and filtering
 *     tags: [Admin - PageItem Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page_type
 *         required: true
 *         schema:
 *           type: string
 *           enum: [home_page, about_page, career_page, contact_page, ffactor_page, beyond_boundary_page, diy_page, faq_page, alliance_page, press_release_page, catalogues_page, gallery_page]
 *         description: Type of page to fetch items for
 *       - in: query
 *         name: list_type
 *         required: true
 *         schema:
 *           type: string
 *         description: Type of list within the page
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
 *         name: status
 *         schema:
 *           type: integer
 *           enum: [0, 1]
 *         description: Filter by status (0=inactive, 1=active)
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [id, order_no, title, status, created_on]
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
 *         description: Page list items fetched successfully
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
 *       400:
 *         description: Missing required parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "page_type and list_type are required query parameters"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       404:
 *         description: No items found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No items found for this list type on this page"
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
 *   post:
 *     summary: Create a new page list item
 *     tags: [Admin - PageItem Management]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePageListItem'
 *           examples:
 *             hero_slide:
 *               summary: Hero Slide Item
 *               value:
 *                 page_type: "home_page"
 *                 list_type: "hero_slides"
 *                 title: "Premium Plant Pots"
 *                 description: "Discover our handcrafted collection"
 *                 image_url: "uploads/page-items/hero-slide-1.jpg"
 *                 link_url: "/collections"
 *                 order_no: 1
 *                 status: 1
 *             feature_item:
 *               summary: Feature Item
 *               value:
 *                 page_type: "about_page"
 *                 list_type: "company_values"
 *                 title: "Quality Craftsmanship"
 *                 description: "Every pot is made with attention to detail"
 *                 image_url: "uploads/page-items/craftsmanship.jpg"
 *                 order_no: 2
 *                 status: 1
 *     responses:
 *       201:
 *         description: Page list item created successfully
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
 *         description: Validation error or creation failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: object
 *                   description: Validation errors by field
 *                 message:
 *                   type: string
 *                   example: "Page list item not created"
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
 * /v1/admin/page-items/{id}:
 *   get:
 *     summary: Get page list item by ID
 *     tags: [Admin - PageItem Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Page list item ID
 *     responses:
 *       200:
 *         description: Page list item fetched successfully
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
 *         description: Page list item not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Page list item not found"
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
 *     summary: Update page list item
 *     tags: [Admin - PageItem Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Page list item ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Item Title"
 *               description:
 *                 type: string
 *                 example: "Updated description text"
 *               image_url:
 *                 type: string
 *                 example: "uploads/page-items/updated-image.jpg"
 *               link_url:
 *                 type: string
 *                 example: "/updated-link"
 *               order_no:
 *                 type: integer
 *                 example: 3
 *               status:
 *                 type: integer
 *                 enum: [0, 1]
 *     responses:
 *       200:
 *         description: Page list item updated successfully
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
 *         description: Page list item not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Page list item not found"
 *                 status:
 *                   type: boolean
 *                   example: false
 *       400:
 *         description: Update failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Page list item update failed"
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
 *     summary: Delete page list item (soft delete)
 *     tags: [Admin - PageItem Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Page list item ID
 *     responses:
 *       200:
 *         description: Page list item deleted successfully
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
 *         description: Page list item not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Page list item not found"
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
 * /v1/admin/page-items/status/{id}:
 *   patch:
 *     summary: Toggle page list item status
 *     tags: [Admin - PageItem Management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Page list item ID
 *     responses:
 *       200:
 *         description: Page list item status updated successfully
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
 *         description: Page list item not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Page list item not found"
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
