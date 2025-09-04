# Bonasila Database Schema

## Overview
This document describes the complete database schema for the Bonasila Plant Pot Management System. The system uses MySQL/MariaDB with Sequelize ORM.

## Common Fields
Most tables include these standard fields:
- `status`: INTEGER (0=inactive, 1=active, 2=deleted)
- `created_on`: DATETIME (timestamp)
- `updated_on`: DATETIME (timestamp)
- `deleted_on`: DATETIME (nullable, for soft deletes)

## Tables

### 1. Admin Management

#### `Admin`
Administrator accounts and authentication
```sql
CREATE TABLE Admin (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    status INT(1) DEFAULT 1 COMMENT '1=active, 0=inactive, 2=deleted',
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME
);
```

#### `admin_logs`
Administrator login/logout tracking
```sql
CREATE TABLE admin_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    admin_id INT NOT NULL,
    public_ip VARCHAR(45),
    local_ip VARCHAR(45),
    login_time DATETIME NOT NULL DEFAULT NOW(),
    logout_time DATETIME,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    user_agent TEXT,
    FOREIGN KEY (admin_id) REFERENCES Admin(id)
);
```

### 2. Content Management

#### `404_page`
404 error page content
```sql
CREATE TABLE 404_page (
    id INT PRIMARY KEY DEFAULT 1,
    page_title VARCHAR(255),
    page_description TEXT,
    page_link VARCHAR(255),
    page_link_title VARCHAR(255),
    image VARCHAR(255),
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `about_page`
About page content
```sql
CREATE TABLE about_page (
    id INT PRIMARY KEY DEFAULT 1,
    tag_line VARCHAR(255),
    header VARCHAR(255),
    sub_header VARCHAR(255),
    header_image VARCHAR(255),
    title VARCHAR(255),
    description TEXT,
    status INT DEFAULT 1,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `about_page_team`
About page team members
```sql
CREATE TABLE about_page_team (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    description TEXT,
    facebook_link VARCHAR(255),
    instagram_link VARCHAR(255),
    linkedin_link VARCHAR(255),
    image VARCHAR(255),
    image_alt VARCHAR(255),
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `homepage`
Homepage content and layout
```sql
CREATE TABLE homepage (
    id INT PRIMARY KEY DEFAULT 1,
    slide_title VARCHAR(255),
    slide_image VARCHAR(255),
    pushup_link VARCHAR(255),
    pushup_link_title VARCHAR(255),
    pushup_header VARCHAR(255),
    pushup_description TEXT,
    pushup_description_1 TEXT,
    pushup_link_1 VARCHAR(255),
    pushup_link_title_1 VARCHAR(255),
    pushup_description_2 TEXT,
    video_file_autoplay VARCHAR(255),
    plant_lover_title VARCHAR(255),
    plant_lover_content TEXT,
    slider_title VARCHAR(255),
    slider_content TEXT,
    slider_footer_title VARCHAR(255),
    slider_footer_content TEXT,
    client_title VARCHAR(255),
    client_image VARCHAR(255),
    client_image_alt VARCHAR(255),
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `contact_page`
Contact page content and information
```sql
CREATE TABLE contact_page (
    id INT PRIMARY KEY DEFAULT 1,
    tag_link VARCHAR(255),
    header_description TEXT,
    form_title VARCHAR(255),
    form_footer_details TEXT,
    form_footer_highlights VARCHAR(255),
    sales_person VARCHAR(255),
    sales_person_position VARCHAR(255),
    sales_person_info TEXT,
    sales_person_image VARCHAR(255),
    address_info TEXT,
    phone_1 VARCHAR(20),
    phone_2 VARCHAR(20),
    phone_3 VARCHAR(20),
    email VARCHAR(255),
    company_name VARCHAR(255),
    address VARCHAR(255),
    footer_image VARCHAR(255),
    image_alt VARCHAR(255),
    footer_title VARCHAR(255),
    footer_link VARCHAR(255),
    footer_link_title VARCHAR(255),
    status INT DEFAULT 1,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `career_page`
Career page content
```sql
CREATE TABLE career_page (
    id INT PRIMARY KEY DEFAULT 1,
    tag_link VARCHAR(255),
    header VARCHAR(255),
    header_image VARCHAR(255),
    page_link VARCHAR(255),
    page_link_title VARCHAR(255),
    header_title VARCHAR(255),
    header_description TEXT,
    invited_title VARCHAR(255),
    invited_subtitle VARCHAR(255),
    invited_content TEXT,
    invited_image VARCHAR(255),
    invited_link VARCHAR(255),
    invited_link_title VARCHAR(255),
    about_title VARCHAR(255),
    about_subtitle VARCHAR(255),
    about_content TEXT,
    about_image VARCHAR(255),
    about_link VARCHAR(255),
    about_link_title VARCHAR(255),
    form_title VARCHAR(255),
    form_footer_content TEXT,
    footer_title VARCHAR(255),
    footer_title_image VARCHAR(255),
    footer_content TEXT,
    footer_image VARCHAR(255),
    status INT DEFAULT 1,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `career_page_lists`
Career job postings
```sql
CREATE TABLE career_page_lists (
    id INT PRIMARY KEY AUTO_INCREMENT,
    posting_title VARCHAR(255) NOT NULL,
    apply_for_this_text TEXT,
    posting_subtitle VARCHAR(255),
    posting_location VARCHAR(255) NOT NULL,
    posting_description TEXT,
    about_title VARCHAR(255),
    about_description TEXT,
    usual_day_title VARCHAR(255),
    usual_day_description TEXT,
    eligibility_title VARCHAR(255),
    eligibility_description TEXT,
    additional_info_title VARCHAR(255),
    additional_info_description TEXT,
    how_to_apply_title VARCHAR(255),
    how_to_apply_description TEXT,
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `alliances_page`
Alliance/partnership page content
```sql
CREATE TABLE alliances_page (
    id INT PRIMARY KEY DEFAULT 1,
    description TEXT,
    header_image VARCHAR(255),
    header_title VARCHAR(255),
    alliance_title VARCHAR(255),
    form_title VARCHAR(255),
    form_footer_content TEXT,
    finishes_title VARCHAR(255),
    finishes_subtitle VARCHAR(255),
    finishes_content TEXT,
    finishes_link_title VARCHAR(255),
    finishes_link_url VARCHAR(255),
    list_header VARCHAR(255),
    list_content TEXT,
    list_title VARCHAR(255),
    ffactor_header VARCHAR(255),
    ffactor_content TEXT,
    ffactor_link_title VARCHAR(255),
    ffactor_link_url VARCHAR(255),
    status INT DEFAULT 1,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `beyond_boundary_page`
Beyond boundaries page content
```sql
CREATE TABLE beyond_boundary_page (
    id INT PRIMARY KEY DEFAULT 1,
    tag_line VARCHAR(255),
    footer_text TEXT,
    video_autoplay VARCHAR(255),
    header_image VARCHAR(255),
    footer_pincode_title VARCHAR(255),
    footer_pincode_text TEXT,
    footer_pincode_video VARCHAR(255),
    list_header VARCHAR(255),
    list_footer VARCHAR(255),
    description TEXT,
    status INT DEFAULT 1,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `catalogues_page`
Catalogues page content
```sql
CREATE TABLE catalogues_page (
    id INT PRIMARY KEY DEFAULT 1,
    form_title VARCHAR(255),
    pdf_title VARCHAR(255),
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `diy_page`
DIY (Do It Yourself) page content
```sql
CREATE TABLE diy_page (
    id INT PRIMARY KEY DEFAULT 1,
    tag_line VARCHAR(255),
    video_file VARCHAR(255),
    bottom_title_link VARCHAR(255),
    bottom_title VARCHAR(255),
    bottom_allow_files VARCHAR(255),
    bottom_info TEXT,
    bottom_content TEXT,
    popup_title VARCHAR(255),
    popup_content TEXT,
    popup_file VARCHAR(255),
    footer_text TEXT,
    list_footer VARCHAR(255),
    list_header VARCHAR(255),
    status INT DEFAULT 1,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `faq_page`
FAQ page content
```sql
CREATE TABLE faq_page (
    id INT PRIMARY KEY DEFAULT 1,
    tag_line VARCHAR(255),
    faq_title VARCHAR(255),
    form_title VARCHAR(255),
    form_submit_text VARCHAR(255),
    form_footer_text TEXT,
    description TEXT,
    status INT DEFAULT 1,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `ffactor_page`
F-Factor page content
```sql
CREATE TABLE ffactor_page (
    id INT PRIMARY KEY DEFAULT 1,
    tag_line VARCHAR(255),
    header VARCHAR(255),
    header_image VARCHAR(255),
    header_title VARCHAR(255),
    header_description TEXT,
    perffection_title VARCHAR(255),
    perffection_subtitle VARCHAR(255),
    perffection_content TEXT,
    perffection_video VARCHAR(255),
    about_title VARCHAR(255),
    about_subtitle VARCHAR(255),
    about_content TEXT,
    about_footer_title VARCHAR(255),
    footer_title VARCHAR(255),
    footer_subtitle VARCHAR(255),
    footer_content TEXT,
    footer_video VARCHAR(255),
    footer_link VARCHAR(255),
    footer_link_title VARCHAR(255),
    status INT DEFAULT 1,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `thankyou_page`
Thank you pages for different request types
```sql
CREATE TABLE thankyou_page (
    id INT PRIMARY KEY AUTO_INCREMENT,
    page_type ENUM('general', 'alliance_request', 'contact_request', 'career_request', 'footer_request', 'business_request', 'talk_to_us', 'design_for_us_request') NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    background_image VARCHAR(255),
    logo_image VARCHAR(255),
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

### 3. Product Management

#### `products`
Main product catalog
```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    tag_line VARCHAR(255) NOT NULL,
    listing_name VARCHAR(255) NOT NULL,
    slider_title VARCHAR(255) NOT NULL,
    slider_description TEXT NOT NULL,
    popup_title VARCHAR(255) NOT NULL,
    popup_content TEXT NOT NULL,
    popup_image VARCHAR(255),
    popup_image_alt VARCHAR(255),
    price_type VARCHAR(255) NOT NULL,
    menu_image VARCHAR(255),
    menu_image_alt VARCHAR(255),
    description TEXT NOT NULL,
    title VARCHAR(255) NOT NULL,
    collection_id INT NOT NULL,
    size_image VARCHAR(255),
    product_sizes TEXT,
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME,
    FOREIGN KEY (collection_id) REFERENCES product_collections(id)
);
```

#### `product_collections`
Product categories/collections
```sql
CREATE TABLE product_collections (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    long_title VARCHAR(255) NOT NULL,
    homepage_long_title VARCHAR(255) NOT NULL,
    homepage_short_description TEXT NOT NULL,
    description TEXT NOT NULL,
    content TEXT NOT NULL,
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `product_media`
Product images and videos
```sql
CREATE TABLE product_media (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    type ENUM('image', 'video') NOT NULL,
    path VARCHAR(255) NOT NULL,
    alt_text VARCHAR(255),
    order INT DEFAULT 0,
    status INT DEFAULT 1 COMMENT '1=active, 0=inactive, 2=deleted',
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

#### `product_prices`
Product pricing information
```sql
CREATE TABLE product_prices (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    a_size VARCHAR(255) NOT NULL,
    b_size VARCHAR(255) NOT NULL,
    c_size VARCHAR(255) NOT NULL,
    d_size VARCHAR(255) NOT NULL,
    h_size VARCHAR(255) NOT NULL,
    price_in_inr DECIMAL(10,2),
    price_in_usd DECIMAL(10,2),
    hollowbody_price_in_inr DECIMAL(10,2),
    hollowbody_price_in_usd DECIMAL(10,2),
    fullbody_price_in_inr DECIMAL(10,2),
    fullbody_price_in_usd DECIMAL(10,2),
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

#### `product_sizes`
Available product sizes
```sql
CREATE TABLE product_sizes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    alphabet VARCHAR(255) NOT NULL,
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `product_finish_types`
Types of finishes (texture, color categories)
```sql
CREATE TABLE product_finish_types (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    video_title VARCHAR(255) NOT NULL,
    video_url VARCHAR(255),
    long_title VARCHAR(255) NOT NULL,
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `product_finishes`
Specific product finishes
```sql
CREATE TABLE product_finishes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    finishes_type_id INT NOT NULL,
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME,
    FOREIGN KEY (finishes_type_id) REFERENCES product_finish_types(id)
);
```

#### `product_finish_mappings`
Many-to-many relationship between products and finishes
```sql
CREATE TABLE product_finish_mappings (
    product_id INT NOT NULL,
    finish_id INT NOT NULL,
    PRIMARY KEY (product_id, finish_id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (finish_id) REFERENCES product_finishes(id)
);
```

### 4. Gallery Management

#### `gallery_page`
Gallery media items
```sql
CREATE TABLE gallery_page (
    id INT PRIMARY KEY AUTO_INCREMENT,
    video VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    image_alt VARCHAR(255) NOT NULL,
    youtube_video_link VARCHAR(255),
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `video_section`
Video section content
```sql
CREATE TABLE video_section (
    id INT PRIMARY KEY DEFAULT 1,
    tag_line VARCHAR(255),
    description TEXT,
    video_file VARCHAR(255),
    youtube_video VARCHAR(255),
    status INT DEFAULT 1,
    created_on DATETIME,
    updated_on DATETIME
);
```

### 5. Press Release Management

#### `press_release_page`
Press release articles
```sql
CREATE TABLE press_release_page (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    date DATETIME NOT NULL,
    banner_image VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    image_alt VARCHAR(255) NOT NULL,
    header VARCHAR(255) NOT NULL,
    image_title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    question TEXT NOT NULL,
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `press_release-section`
Press release section configuration
```sql
CREATE TABLE `press_release-section` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tag_line VARCHAR(255) NOT NULL,
    header_description TEXT NOT NULL,
    status INT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

### 6. Contact Management

#### `contacts`
Contact form submissions
```sql
CREATE TABLE contacts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    request_type ENUM('design_for_us', 'business_request', 'inquiry', 'buying_request', 'contact_request', 'newsletter_request', 'alliance_request', 'career_request', 'faq_request', 'catalogue_request') NOT NULL,
    name VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    city VARCHAR(255),
    company VARCHAR(255),
    message TEXT,
    file VARCHAR(255),
    posted_date DATETIME NOT NULL DEFAULT NOW(),
    status TINYINT DEFAULT 1,
    extra JSON
);
```

### 7. SEO & Meta Management

#### `metacontent`
SEO meta content for pages
```sql
CREATE TABLE metacontent (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    page_slug VARCHAR(100) NOT NULL UNIQUE,
    page_name VARCHAR(255) NOT NULL,
    status TINYINT DEFAULT 1,
    title VARCHAR(255),
    keywords TEXT,
    description TEXT,
    header_script TEXT,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

#### `page_list_items`
Dynamic page content items
```sql
CREATE TABLE page_list_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    page_type ENUM('home_page', 'about_page', 'career_page', 'contact_page', 'ffactor_page', 'beyond_boundary_page', 'diy_page', 'faq_page', 'alliance_page', 'press_release_page', 'catalogues_page', 'gallery_page') NOT NULL,
    list_type ENUM('plant_lover_steps', 'brand', 'product', 'name_list', 'slider', 'client_list', 'ffactor_items') NOT NULL,
    title VARCHAR(255),
    description TEXT,
    file VARCHAR(255),
    pdf VARCHAR(255),
    image_alt VARCHAR(255),
    link_url VARCHAR(255),
    name VARCHAR(255),
    order_no INT,
    status TINYINT DEFAULT 1,
    deleted_on DATETIME,
    created_on DATETIME,
    updated_on DATETIME
);
```

## Relationships

### Primary Relationships
- `products.collection_id` → `product_collections.id`
- `product_media.product_id` → `products.id`
- `product_prices.product_id` → `products.id`
- `product_finishes.finishes_type_id` → `product_finish_types.id`
- `admin_logs.admin_id` → `Admin.id`

### Many-to-Many Relationships
- `products` ↔ `product_finishes` (via `product_finish_mappings`)

## Indexes Recommendations
```sql
-- Performance indexes
CREATE INDEX idx_products_collection ON products(collection_id);
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_product_media_product ON product_media(product_id);
CREATE INDEX idx_contacts_type ON contacts(request_type);
CREATE INDEX idx_contacts_date ON contacts(posted_date);
CREATE INDEX idx_metacontent_slug ON metacontent(page_slug);
CREATE INDEX idx_page_items_page_type ON page_list_items(page_type, list_type);
```

## Notes
- All image/video fields use relative paths, full URLs constructed via `process.env.IMG_URI`
- Soft delete pattern used throughout (status field + deleted_on timestamp)
- Most single-page content tables use `id = 1` as singleton pattern
- ENUM fields provide data validation at database level
- JSON field in contacts table allows flexible additional data storage