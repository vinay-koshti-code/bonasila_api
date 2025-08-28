# Bonasila Database Schema Documentation

## Overview
This document provides a comprehensive overview of the Bonasila database schema, including all tables, fields, relationships, constraints, and validation rules.

## Database Tables

### 1. Admin Table
**Table Name:** `Admin`
**Purpose:** Store admin user authentication and profile information

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER(11) | PRIMARY KEY, AUTO_INCREMENT | Unique admin identifier |
| name | STRING(255) | NOT NULL | Admin full name |
| email | STRING(255) | NOT NULL | Admin email address |
| password | STRING(255) | NOT NULL | Hashed password |
| status | INTEGER(1) | DEFAULT 1 | 1=active, 0=inactive, 2=deleted |
| createdAt | DATE | DEFAULT NOW | Record creation timestamp |
| updatedAt | DATE | NULL | Record update timestamp |

**Relationships:** None
**Indexes:** Primary key on `id`
**Special Features:** Password hashing hooks, JWT token generation methods

---

### 2. Products Table
**Table Name:** `products`
**Purpose:** Store product information and details

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique product identifier |
| name | STRING | NOT NULL | Product name |
| tag_line | STRING | NOT NULL | Product tagline |
| listing_name | STRING | NOT NULL | Product listing display name |
| slider_title | STRING | NOT NULL | Slider display title |
| slider_description | TEXT | NOT NULL | Slider description |
| popup_title | STRING | NOT NULL | Popup modal title |
| popup_content | TEXT | NOT NULL | Popup modal content |
| popup_image | STRING | NULL | Popup image filename (with IMG_URI getter) |
| popup_image_alt | STRING | NULL | Popup image alt text |
| price_type | STRING | NOT NULL | Price type classification |
| menu_image | STRING | NULL | Menu display image (with IMG_URI getter) |
| menu_image_alt | STRING | NULL | Menu image alt text |
| description | TEXT | NOT NULL | Product description |
| title | STRING | NOT NULL | Product title |
| collection_id | INTEGER | NOT NULL, FOREIGN KEY | Reference to product_collections.id |
| size_image | STRING | NULL | Size chart image (with IMG_URI getter) |
| product_sizes | TEXT | NULL | Product size information |
| status | INTEGER | DEFAULT 1, NOT NULL | 0=inactive, 1=active, 2=deleted |
| deleted_on | DATE | NULL | Soft delete timestamp |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:**
- `belongsTo` ProductCollection (collection_id → product_collections.id)
- `hasMany` ProductMedia (id → product_media.product_id)
- `hasMany` ProductPrice (id → product_prices.product_id)

---

### 3. Product Collections Table
**Table Name:** `product_collections`
**Purpose:** Store product collection/category information

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique collection identifier |
| title | STRING | NOT NULL | Collection title |
| long_title | STRING | NOT NULL | Extended collection title |
| homepage_long_title | STRING | NOT NULL | Homepage display title |
| homepage_short_description | TEXT | NOT NULL | Homepage description |
| description | TEXT | NOT NULL | Collection description |
| content | TEXT | NOT NULL | Collection content |
| status | INTEGER | DEFAULT 1, NOT NULL | 0=inactive, 1=active, 2=deleted |
| deleted_on | DATE | NULL | Soft delete timestamp |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:**
- `hasMany` Product (id → products.collection_id)

---

### 4. Product Media Table
**Table Name:** `product_media`
**Purpose:** Store product images and videos

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique media identifier |
| product_id | INTEGER | NOT NULL, FOREIGN KEY | Reference to products.id |
| type | ENUM('image', 'video') | NOT NULL | Media type |
| path | STRING | NOT NULL | File path (with IMG_URI getter) |
| alt_text | STRING | NULL | Alternative text |
| order | INTEGER | DEFAULT 0, NOT NULL | Display order |
| status | INTEGER | DEFAULT 1, NOT NULL | 1=active, 0=inactive, 2=deleted |
| deleted_on | DATE | NULL | Soft delete timestamp |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:**
- `belongsTo` Product (product_id → products.id)

---

### 5. Product Prices Table
**Table Name:** `product_prices`
**Purpose:** Store product pricing information with size variations

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique price identifier |
| product_id | INTEGER | NOT NULL, FOREIGN KEY | Reference to products.id |
| name | STRING | NOT NULL | Price variant name |
| a_size | STRING | NOT NULL | Size A dimension |
| b_size | STRING | NOT NULL | Size B dimension |
| c_size | STRING | NOT NULL | Size C dimension |
| d_size | STRING | NOT NULL | Size D dimension |
| h_size | STRING | NOT NULL | Height dimension |
| price_in_inr | DECIMAL(10,2) | NULL | Price in Indian Rupees |
| price_in_usd | DECIMAL(10,2) | NULL | Price in US Dollars |
| hollowbody_price_in_inr | DECIMAL(10,2) | NULL | Hollow body price in INR |
| hollowbody_price_in_usd | DECIMAL(10,2) | NULL | Hollow body price in USD |
| fullbody_price_in_inr | DECIMAL(10,2) | NULL | Full body price in INR |
| fullbody_price_in_usd | DECIMAL(10,2) | NULL | Full body price in USD |
| deleted_on | DATE | NULL | Soft delete timestamp |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:**
- `belongsTo` Product (product_id → products.id)

---

### 6. Product Sizes Table
**Table Name:** `product_sizes`
**Purpose:** Store available product sizes

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique size identifier |
| name | STRING | NOT NULL | Size name |
| alphabet | STRING | NOT NULL | Size alphabet code |
| status | INTEGER | DEFAULT 1, NOT NULL | 0=inactive, 1=active, 2=deleted |
| deleted_on | DATE | NULL | Soft delete timestamp |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:** None (referenced by products.product_sizes as TEXT)

---

### 7. Product Finish Types Table
**Table Name:** `product_finish_types`
**Purpose:** Store product finish type categories

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique finish type identifier |
| title | STRING | NOT NULL | Finish type title |
| content | TEXT | NOT NULL | Finish type description |
| video_title | STRING | NOT NULL | Video title |
| video_url | STRING | NULL | Video URL |
| long_title | STRING | NOT NULL | Extended title |
| status | INTEGER | DEFAULT 1, NOT NULL | 0=inactive, 1=active, 2=deleted |
| deleted_on | DATE | NULL | Soft delete timestamp |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:**
- `hasMany` ProductFinishes (id → product_finishes.finishes_type_id)

---

### 8. Product Finishes Table
**Table Name:** `product_finishes`
**Purpose:** Store individual product finishes

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique finish identifier |
| title | STRING | NOT NULL | Finish title |
| image | STRING | NULL | Finish image (with IMG_URI getter) |
| finishes_type_id | INTEGER | NOT NULL, FOREIGN KEY | Reference to product_finish_types.id |
| status | INTEGER | DEFAULT 1, NOT NULL | 0=inactive, 1=active, 2=deleted |
| deleted_on | DATE | NULL | Soft delete timestamp |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:**
- `belongsTo` ProductFinishType (finishes_type_id → product_finish_types.id)

---

### 9. Contacts Table
**Table Name:** `contacts`
**Purpose:** Store contact form submissions and requests

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique contact identifier |
| request_type | ENUM | NOT NULL | Type of request (10 predefined types) |
| name | STRING | NULL | Contact person name |
| phone | STRING | NULL | Contact phone number |
| email | STRING | NULL | Contact email address |
| city | STRING | NULL | Contact city |
| company | STRING | NULL | Contact company |
| message | TEXT | NULL | Contact message |
| file | STRING | NULL | Attached file (with IMG_URI getter) |
| posted_date | DATE | DEFAULT NOW, NOT NULL | Submission timestamp |
| status | TINYINT | DEFAULT 1, NOT NULL | 0=inactive, 1=active, 2=deleted |
| extra | JSON | NULL | Additional dynamic fields |

**ENUM Values for request_type:**
- design_for_us
- business_request
- inquiry
- buying_request
- contact_request
- newsletter_request
- alliance_request
- career_request
- faq_request
- catalogue_request

**Relationships:** None

---

### 10. Meta Content Table
**Table Name:** `metacontent`
**Purpose:** Store SEO meta information for pages

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | BIGINT | PRIMARY KEY, AUTO_INCREMENT | Unique meta content identifier |
| page_slug | STRING(100) | NOT NULL, UNIQUE | Page URL slug |
| page_name | STRING(255) | NOT NULL | Page display name |
| status | TINYINT | DEFAULT 1, NOT NULL | 0=inactive, 1=active |
| title | STRING(255) | NULL | SEO title tag |
| keywords | TEXT | NULL | SEO keywords |
| description | TEXT | NULL | SEO meta description |
| header_script | TEXT | NULL | Custom header scripts |
| deleted_on | DATE | NULL | Soft delete timestamp |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:** None
**Indexes:** Unique index on `page_slug`

---

### 11. Page List Items Table
**Table Name:** `page_list_items`
**Purpose:** Store dynamic list items for various pages

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique item identifier |
| page_type | ENUM | NOT NULL | Target page type (12 predefined types) |
| list_type | ENUM | NOT NULL | List category type (4 predefined types) |
| title | STRING(255) | NULL | Item title |
| description | TEXT | NULL | Item description |
| image_url | STRING(255) | NULL | Item image (with IMG_URI getter) |
| image_alt | STRING(255) | NULL | Image alt text |
| link_url | STRING(255) | NULL | Item link URL |
| order_no | INTEGER | NULL | Display order |
| status | TINYINT | DEFAULT 1, NOT NULL | 0=inactive, 1=active, 2=deleted |
| deleted_on | DATE | NULL | Soft delete timestamp |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**ENUM Values for page_type:**
- home_page, about_page, career_page, contact_page, ffactor_page, beyond_boundary_page, diy_page, faq_page, alliance_page, press_release_page, catalogues_page, gallery_page

**ENUM Values for list_type:**
- plant_lover_steps, brand, product, name_list

**Relationships:** None

---

## Page Content Tables

### 12. Home Page Table
**Table Name:** `homepage`
**Purpose:** Store homepage content and configuration

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, DEFAULT 1 | Fixed ID for singleton |
| slide_title | STRING | NULL | Main slide title |
| slide_image | STRING | NULL | Slide background image (with IMG_URI getter) |
| pushup_link | STRING | NULL | First pushup section link |
| pushup_link_title | STRING | NULL | First pushup link text |
| pushup_header | STRING | NULL | Pushup section header |
| pushup_description | TEXT | NULL | First pushup description |
| pushup_description_1 | TEXT | NULL | Second pushup description |
| pushup_link_1 | STRING | NULL | Second pushup link |
| pushup_link_title_1 | STRING | NULL | Second pushup link text |
| pushup_description_2 | TEXT | NULL | Third pushup description |
| video_file_autoplay | STRING | NULL | Autoplay video file (with IMG_URI getter) |
| plant_lover_title | STRING | NULL | Plant lover section title |
| plant_lover_content | TEXT | NULL | Plant lover section content |
| slider_title | STRING | NULL | Product slider title |
| slider_content | TEXT | NULL | Product slider content |
| slider_footer_title | STRING | NULL | Slider footer title |
| slider_footer_content | TEXT | NULL | Slider footer content |
| client_title | STRING | NULL | Client section title |
| client_image | STRING | NULL | Client section image (with IMG_URI getter) |
| client_image_alt | STRING | NULL | Client image alt text |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:** None (Singleton pattern)

---

### 13. About Page Table
**Table Name:** `about_page`
**Purpose:** Store about page content

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, DEFAULT 1 | Fixed ID for singleton |
| tag_line | STRING | NULL | Page tagline |
| header | STRING | NULL | Page header |
| sub_header | STRING | NULL | Page sub-header |
| header_image | STRING | NULL | Header image (with IMG_URI getter) |
| title | STRING | NULL | Page title |
| description | TEXT | NULL | Page description |
| status | INTEGER | DEFAULT 1, NOT NULL | 0=inactive, 1=active |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:** None (Singleton pattern)

---

### 14. About Page Team Table
**Table Name:** `about_page_team`
**Purpose:** Store team member information for about page

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique team member identifier |
| name | STRING | NOT NULL | Team member name |
| position | STRING | NOT NULL | Team member position |
| description | TEXT | NULL | Team member description |
| facebook_link | STRING | NULL | Facebook profile link |
| instagram_link | STRING | NULL | Instagram profile link |
| linkedin_link | STRING | NULL | LinkedIn profile link |
| image | STRING | NULL | Team member photo (with IMG_URI getter) |
| image_alt | STRING | NULL | Image alt text |
| status | INTEGER | DEFAULT 1, NOT NULL | 0=inactive, 1=active, 2=deleted |
| deleted_on | DATE | NULL | Soft delete timestamp |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:** None

---

### 15. Career Page Table
**Table Name:** `career_page`
**Purpose:** Store career page content and sections

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, DEFAULT 1 | Fixed ID for singleton |
| tag_link | STRING | NULL | Tag link URL |
| header | STRING | NULL | Page header |
| header_image | STRING | NULL | Header image (with IMG_URI getter) |
| page_link | STRING | NULL | Page link URL |
| page_link_title | STRING | NULL | Page link title |
| header_title | STRING | NULL | Header section title |
| header_description | TEXT | NULL | Header section description |
| invited_title | STRING | NULL | Invitation section title |
| invited_subtitle | STRING | NULL | Invitation section subtitle |
| invited_content | TEXT | NULL | Invitation section content |
| invited_image | STRING | NULL | Invitation section image (with IMG_URI getter) |
| invited_link | STRING | NULL | Invitation section link |
| invited_link_title | STRING | NULL | Invitation link title |
| about_title | STRING | NULL | About section title |
| about_subtitle | STRING | NULL | About section subtitle |
| about_content | TEXT | NULL | About section content |
| about_image | STRING | NULL | About section image (with IMG_URI getter) |
| about_link | STRING | NULL | About section link |
| about_link_title | STRING | NULL | About link title |
| form_title | STRING | NULL | Form section title |
| form_footer_content | TEXT | NULL | Form footer content |
| footer_title | STRING | NULL | Footer title |
| footer_title_image | STRING | NULL | Footer title image (with IMG_URI getter) |
| footer_content | TEXT | NULL | Footer content |
| footer_image | STRING | NULL | Footer image (with IMG_URI getter) |
| status | INTEGER | DEFAULT 1, NOT NULL | 0=inactive, 1=active |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:** None (Singleton pattern)

---

### 16. Career Posting List Table
**Table Name:** `career_posting_lists`
**Purpose:** Store individual career job postings

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | INTEGER | PRIMARY KEY, AUTO_INCREMENT | Unique posting identifier |
| position | STRING | NOT NULL | Job position title |
| description | TEXT | NULL | Job description |
| requirements | TEXT | NULL | Job requirements |
| location | STRING | NULL | Job location |
| employment_type | STRING | NULL | Employment type (full-time, part-time, etc.) |
| salary_range | STRING | NULL | Salary range |
| application_deadline | DATE | NULL | Application deadline |
| status | INTEGER | DEFAULT 1, NOT NULL | 0=inactive, 1=active, 2=deleted |
| deleted_on | DATE | NULL | Soft delete timestamp |
| created_on | DATE | AUTO | Creation timestamp |
| updated_on | DATE | AUTO | Update timestamp |

**Relationships:** None

---

## Additional Page Tables (Following Similar Patterns)

### 17. 404 Page Table (`404_page`)
### 18. Thank You Page Table (`thankyou_page`)
### 19. Catalogues Page Table (`catalogues_page`)
### 20. Contact Page Table (`contact_page`)
### 21. Beyond Boundary Page Table (`beyond_boundary_page`)
### 22. DIY Page Table (`diy_page`)
### 23. FAQ Page Table (`faq_page`)
### 24. Gallery Page Table (`gallery_pages`)
### 25. Press Release Page Table (`press_release_pages`)
### 26. F-Factor Page Table (`ffactor_page`)
### 27. Alliances Page Table (`alliances_page`)
### 28. Page Media Table (`page_media`)

All page tables follow similar patterns with:
- Singleton pattern (ID = 1) for main page content
- Multiple content sections with titles, descriptions, images
- Image fields with IMG_URI getter functions
- Status field for active/inactive states
- Timestamps for creation and updates

## Common Patterns and Conventions

### Status Field Values
- `0` = Inactive
- `1` = Active (Default)
- `2` = Deleted (Soft delete)

### Image Field Handling
All image fields include a `get()` function that automatically prepends `process.env.IMG_URI` to the filename.

### Timestamps
- `created_on` / `createdAt` - Automatic creation timestamp
- `updated_on` / `updatedAt` - Automatic update timestamp
- `deleted_on` - Manual soft delete timestamp

### Scopes
Most models include:
- `defaultScope` - Filters out deleted records
- `unscoped` - Access all records including deleted
- `withInactive` - Include inactive records

### Foreign Key Relationships
- Products → Product Collections (collection_id)
- Product Media → Products (product_id)
- Product Prices → Products (product_id)
- Product Finishes → Product Finish Types (finishes_type_id)

### File Upload Support
The following tables support file uploads with automatic URL generation:
- Products (popup_image, menu_image, size_image)
- Product Media (path)
- Product Finishes (image)
- Contacts (file)
- All page tables (various image fields)
- Page List Items (image_url)
- About Page Team (image)

## Validation Rules

### Required Fields
- Admin: name, email, password
- Products: name, tag_line, listing_name, slider_title, slider_description, popup_title, popup_content, price_type, description, title, collection_id
- Product Collections: title, long_title, homepage_long_title, homepage_short_description, description, content
- Contacts: request_type
- Meta Content: page_slug, page_name
- About Page Team: name, position

### Unique Constraints
- Meta Content: page_slug (unique)

### ENUM Constraints
- Contact request_type: 10 predefined values
- Product Media type: 'image' or 'video'
- Page List Items page_type: 12 predefined page types
- Page List Items list_type: 4 predefined list types

This schema supports a comprehensive content management system with product catalog, contact management, SEO optimization, and dynamic page content management.