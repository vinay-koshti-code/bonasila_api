const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bonasila API Documentation',
      version: '1.0.0',
      description: 'Bonasila API with Swagger documentation'
    },
    servers: [
      {
        url: 'http://192.168.29.169:3000/api',
        description: 'Development server'
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Enter JWT token obtained from login endpoint'
        }
      },
      schemas: {
        AdminLogin: {
          type: 'object',
          required: ['email', 'password'],
          properties: {
            email: {
              type: 'string',
              format: 'email',
              example: 'admin@example.com'
            },
            password: {
              type: 'string',
              minLength: 6,
              example: 'password123'
            }
          }
        },
        AdminProfile: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            name: {
              type: 'string',
              example: 'Admin User'
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'admin@example.com'
            }
          }
        },
        AdminLoginResponse: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            name: {
              type: 'string',
              example: 'Admin User'
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'admin@example.com'
            },
            accessToken: {
              type: 'string',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
            },
            refreshToken: {
              type: 'string',
              example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
            }
          }
        },
        FourOFourPage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            page_title: {
              type: 'string',
              example: 'Page Not Found'
            },
            page_description: {
              type: 'string',
              example: 'The page you are looking for does not exist'
            },
            page_link: {
              type: 'string',
              example: '/home'
            },
            page_link_title: {
              type: 'string',
              example: 'Go to Home'
            },
            image: {
              type: 'string',
              example: 'https://bucket.s3.region.amazonaws.com/uploads/pages/404-image.jpg'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        AboutPage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            tag_line: {
              type: 'string',
              example: 'Crafting Excellence Since 1995'
            },
            header: {
              type: 'string',
              example: 'About Bonasila'
            },
            sub_header: {
              type: 'string',
              example: 'Premium Plant Pot Manufacturers'
            },
            header_image: {
              type: 'string',
              example: 'uploads/about/about-header.jpg'
            },
            title: {
              type: 'string',
              example: 'Our Story'
            },
            description: {
              type: 'string',
              example: 'Founded with a passion for creating beautiful plant pots...'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        AboutPageTeam: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            name: {
              type: 'string',
              example: 'John Smith'
            },
            position: {
              type: 'string',
              example: 'CEO & Founder'
            },
            description: {
              type: 'string',
              example: 'John founded Bonasila with a vision to create the finest plant pots...'
            },
            facebook_link: {
              type: 'string',
              example: 'https://facebook.com/johnsmith'
            },
            instagram_link: {
              type: 'string',
              example: 'https://instagram.com/johnsmith'
            },
            linkedin_link: {
              type: 'string',
              example: 'https://linkedin.com/in/johnsmith'
            },
            image: {
              type: 'string',
              example: 'uploads/team/john-smith.jpg'
            },
            image_alt: {
              type: 'string',
              example: 'John Smith, CEO of Bonasila'
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            }
          }
        },
        AlliancePage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            description: {
              type: 'string',
              example: 'Join our network of partners and grow your business'
            },
            header_image: {
              type: 'string',
              example: 'uploads/alliance/alliance-header.jpg'
            },
            header_title: {
              type: 'string',
              example: 'Partner with Bonasila'
            },
            alliance_title: {
              type: 'string',
              example: 'Strategic Partnerships'
            },
            form_title: {
              type: 'string',
              example: 'Join Our Partner Network'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        BeyondBoundaryPage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            tag_line: {
              type: 'string',
              example: 'Beyond Boundaries, Beyond Expectations'
            },
            footer_text: {
              type: 'string',
              example: 'Pushing the limits of design and functionality'
            },
            video_autoplay: {
              type: 'string',
              example: 'uploads/beyond-boundary/autoplay-video.mp4'
            },
            header_image: {
              type: 'string',
              example: 'uploads/beyond-boundary/header-bg.jpg'
            },
            description: {
              type: 'string',
              example: 'We constantly push beyond conventional boundaries'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        CareerPage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            tag_link: {
              type: 'string',
              example: '/careers'
            },
            header: {
              type: 'string',
              example: 'Join Our Team'
            },
            header_image: {
              type: 'string',
              example: 'uploads/career/career-header.jpg'
            },
            header_title: {
              type: 'string',
              example: 'Build Your Career with Bonasila'
            },
            header_description: {
              type: 'string',
              example: 'Join a team passionate about creating beautiful plant pots'
            },
            form_title: {
              type: 'string',
              example: 'Apply for a Position'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        CareerPostingList: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            posting_title: {
              type: 'string',
              example: 'Senior Product Designer'
            },
            apply_for_this_text: {
              type: 'string',
              example: 'Ready to join our design team?'
            },
            posting_subtitle: {
              type: 'string',
              example: 'Full-time • Design Team'
            },
            posting_location: {
              type: 'string',
              example: 'Mumbai, India'
            },
            posting_description: {
              type: 'string',
              example: 'We are looking for a creative designer'
            },
            about_title: {
              type: 'string',
              example: 'About This Role'
            },
            about_description: {
              type: 'string',
              example: 'As a Senior Product Designer, you will lead design initiatives'
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            }
          }
        },
        CataloguesPage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            form_title: {
              type: 'string',
              example: 'Request Our Product Catalogue'
            },
            pdf_title: {
              type: 'string',
              example: 'Download Digital Catalogue'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        ContactRequest: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            request_type: {
              type: 'string',
              enum: ['design_for_us', 'business_request', 'inquiry', 'buying_request', 'contact_request', 'newsletter_request', 'alliance_request', 'career_request', 'faq_request', 'catalogue_request'],
              example: 'contact_request'
            },
            name: {
              type: 'string',
              example: 'John Doe'
            },
            phone: {
              type: 'string',
              example: '+1234567890'
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'john.doe@example.com'
            },
            city: {
              type: 'string',
              example: 'New York'
            },
            company: {
              type: 'string',
              example: 'ABC Corp'
            },
            message: {
              type: 'string',
              example: 'I would like to inquire about your products'
            },
            file: {
              type: 'string',
              example: 'uploads/files/document.pdf'
            },
            posted_date: {
              type: 'string',
              format: 'date-time'
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            extra: {
              type: 'object',
              example: {}
            }
          }
        },
        ContactPage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            tag_link: {
              type: 'string',
              example: '/contact'
            },
            header_description: {
              type: 'string',
              example: 'Get in touch with us for any inquiries'
            },
            form_title: {
              type: 'string',
              example: 'Send us a Message'
            },
            sales_person: {
              type: 'string',
              example: 'John Smith'
            },
            sales_person_position: {
              type: 'string',
              example: 'Sales Manager'
            },
            phone_1: {
              type: 'string',
              example: '+91-9876543210'
            },
            email: {
              type: 'string',
              example: 'contact@bonasila.com'
            },
            company_name: {
              type: 'string',
              example: 'Bonasila Plant Pots Pvt Ltd'
            },
            address: {
              type: 'string',
              example: '123 Garden Street, Plant City'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        DIYPage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            tag_line: {
              type: 'string',
              example: 'Do It Yourself - Creative Plant Pot Projects'
            },
            video_file: {
              type: 'string',
              example: 'uploads/diy/tutorial-video.mp4'
            },
            bottom_title: {
              type: 'string',
              example: 'More DIY Projects'
            },
            popup_title: {
              type: 'string',
              example: 'DIY Tips & Tricks'
            },
            footer_text: {
              type: 'string',
              example: 'Join our DIY community'
            },
            list_header: {
              type: 'string',
              example: 'Popular DIY Projects'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        FAQPage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            tag_line: {
              type: 'string',
              example: 'Your Questions Answered'
            },
            faq_title: {
              type: 'string',
              example: 'Frequently Asked Questions'
            },
            form_title: {
              type: 'string',
              example: 'Still Have Questions?'
            },
            form_submit_text: {
              type: 'string',
              example: 'Send Message'
            },
            form_footer_text: {
              type: 'string',
              example: 'We will get back to you within 24 hours'
            },
            description: {
              type: 'string',
              example: 'Find answers to common questions about our plant pots'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        FFactorPage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            tag_line: {
              type: 'string',
              example: 'The F-Factor Difference'
            },
            header: {
              type: 'string',
              example: 'F-Factor Excellence'
            },
            header_image: {
              type: 'string',
              example: 'uploads/ffactor/header-bg.jpg'
            },
            header_title: {
              type: 'string',
              example: 'Discover the F-Factor'
            },
            header_description: {
              type: 'string',
              example: 'Our proprietary F-Factor methodology ensures quality'
            },
            perffection_title: {
              type: 'string',
              example: 'Perfection in Every Detail'
            },
            about_title: {
              type: 'string',
              example: 'About F-Factor'
            },
            footer_title: {
              type: 'string',
              example: 'Experience F-Factor'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        ProductFinishType: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            title: {
              type: 'string',
              example: 'Matte Finish'
            },
            content: {
              type: 'string',
              example: 'A smooth matte finish that provides excellent durability'
            },
            video_title: {
              type: 'string',
              example: 'Matte Finish Application Process'
            },
            video_url: {
              type: 'string',
              example: 'uploads/finishes/video-1234567890.mp4'
            },
            video_image: {
              type: 'string',
              example: 'uploads/finishes/video_image-1234567890.jpg'
            },
            long_title: {
              type: 'string',
              example: 'Premium Matte Finish - Professional Grade'
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            }
          }
        },
        GalleryPage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            video: {
              type: 'string',
              example: 'https://bucket.s3.region.amazonaws.com/uploads/gallery/video.mp4'
            },
            image: {
              type: 'string',
              example: 'https://bucket.s3.region.amazonaws.com/uploads/gallery/image.jpg'
            },
            image_alt: {
              type: 'string',
              example: 'Gallery image description'
            },
            youtube_video_link: {
              type: 'string',
              example: 'https://youtube.com/watch?v=example'
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        GallerySection: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            title: {
              type: 'string',
              example: 'Modern Collection'
            },
            description: {
              type: 'string',
              example: 'Contemporary plant pots for modern spaces'
            },
            image: {
              type: 'string',
              example: 'uploads/gallery/modern-collection.jpg'
            },
            image_alt: {
              type: 'string',
              example: 'Modern plant pot collection'
            },
            link_url: {
              type: 'string',
              example: '/collections/modern'
            },
            order_no: {
              type: 'integer',
              example: 1
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            }
          }
        },
        HomePage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            slide_title: {
              type: 'string',
              example: 'Welcome to Bonasila'
            },
            slide_image: {
              type: 'string',
              example: 'uploads/homepage/slide-image.jpg'
            },
            pushup_header: {
              type: 'string',
              example: 'Premium Plant Pots'
            },
            pushup_description: {
              type: 'string',
              example: 'Discover our collection of premium plant pots'
            },
            video_file_autoplay: {
              type: 'string',
              example: 'uploads/homepage/autoplay-video.mp4'
            },
            plant_lover_title: {
              type: 'string',
              example: 'For Plant Lovers'
            },
            plant_lover_content: {
              type: 'string',
              example: 'We understand your passion for plants'
            },
            slider_title: {
              type: 'string',
              example: 'Our Collections'
            },
            client_title: {
              type: 'string',
              example: 'Our Happy Clients'
            },
            client_image: {
              type: 'string',
              example: 'uploads/homepage/clients-banner.jpg'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        MetaContent: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            page_slug: {
              type: 'string',
              example: 'home'
            },
            page_name: {
              type: 'string',
              example: 'Home Page'
            },
            title: {
              type: 'string',
              example: 'Home - Bonasila'
            },
            keywords: {
              type: 'string',
              example: 'home, bonasila, products'
            },
            description: {
              type: 'string',
              example: 'Welcome to Bonasila home page'
            },
            header_script: {
              type: 'string',
              example: '<script>console.log("home");</script>'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        PageListItem: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            page_type: {
              type: 'string',
              enum: ['home_page', 'about_page', 'career_page', 'contact_page', 'ffactor_page', 'beyond_boundary_page', 'diy_page', 'faq_page', 'alliance_page', 'press_release_page', 'catalogues_page', 'gallery_page'],
              example: 'home_page'
            },
            list_type: {
              type: 'string',
              enum: ['plant_lover_steps', 'brand', 'product', 'name_list', 'slider', 'client_list'],
              example: 'slider'
            },
            title: {
              type: 'string',
              example: 'Premium Collection'
            },
            description: {
              type: 'string',
              example: 'Our finest plant pots for discerning customers'
            },
            image_url: {
              type: 'string',
              example: 'uploads/page-items/premium-collection.jpg'
            },
            image_alt: {
              type: 'string',
              example: 'Premium plant pot collection'
            },
            link_url: {
              type: 'string',
              example: '/collections/premium'
            },
            order_no: {
              type: 'integer',
              example: 1
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            }
          }
        },
        ProductMedia: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            product_id: {
              type: 'integer',
              example: 1
            },
            type: {
              type: 'string',
              enum: ['image', 'video'],
              example: 'image'
            },
            path: {
              type: 'string',
              example: 'uploads/media/file-1234567890-123456789.jpg'
            },
            alt_text: {
              type: 'string',
              example: 'Product image description'
            },
            order_no: {
              type: 'integer',
              example: 1
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            }
          }
        },
        PressReleasePage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            title: {
              type: 'string',
              example: 'Bonasila Launches Revolutionary Eco-Friendly Plant Pot Collection'
            },
            category: {
              type: 'string',
              example: 'Product Launch'
            },
            date: {
              type: 'string',
              format: 'date-time',
              example: '2024-01-15T10:30:00Z'
            },
            banner_image: {
              type: 'string',
              example: 'https://bucket.s3.region.amazonaws.com/uploads/press-release/banner-image.jpg'
            },
            image: {
              type: 'string',
              example: 'https://bucket.s3.region.amazonaws.com/uploads/press-release/eco-collection-launch.jpg'
            },
            image_alt: {
              type: 'string',
              example: 'Eco-friendly plant pot collection launch'
            },
            header: {
              type: 'string',
              example: 'Revolutionary Eco-Friendly Collection'
            },
            image_title: {
              type: 'string',
              example: 'Eco Collection Launch Event'
            },
            description: {
              type: 'string',
              example: 'Bonasila introduces a groundbreaking eco-friendly plant pot collection that combines sustainability with premium design'
            },
            question: {
              type: 'string',
              example: 'What makes this collection environmentally sustainable?'
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        PressReleaseSection: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            tag_line: {
              type: 'string',
              example: 'Latest News & Updates'
            },
            header_description: {
              type: 'string',
              example: 'Stay updated with the latest news and announcements from Bonasila'
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        Product: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            name: {
              type: 'string',
              example: 'Premium Plant Pot'
            },
            tag_line: {
              type: 'string',
              example: 'Best quality product'
            },
            listing_name: {
              type: 'string',
              example: 'Premium Product Listing'
            },
            slider_title: {
              type: 'string',
              example: 'Featured Product'
            },
            slider_description: {
              type: 'string',
              example: 'This is a premium quality product'
            },
            popup_title: {
              type: 'string',
              example: 'Product Details'
            },
            popup_content: {
              type: 'string',
              example: 'Detailed product information'
            },
            popup_image: {
              type: 'string',
              example: 'popup-image.jpg'
            },
            price_type: {
              type: 'string',
              example: 'fixed'
            },
            media: {
              type: 'string',
              example: 'product-media.jpg'
            },
            cover_image: {
              type: 'string',
              example: 'cover-image.jpg'
            },
            description: {
              type: 'string',
              example: 'Product description'
            },
            title: {
              type: 'string',
              example: 'Product Title'
            },
            collection_id: {
              type: 'integer',
              example: 1
            },
            size_image: {
              type: 'string',
              example: 'size-chart.jpg'
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            }
          }
        },
        ProductCollection: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            title: {
              type: 'string',
              example: 'Classic Collection'
            },
            long_title: {
              type: 'string',
              example: 'Timeless designs for every home'
            },
            homepage_long_title: {
              type: 'string',
              example: 'Explore our classic and timeless plant pots'
            },
            homepage_short_description: {
              type: 'string',
              example: 'A selection of our most popular designs'
            },
            description: {
              type: 'string',
              example: 'This collection features our best-selling pots'
            },
            content: {
              type: 'string',
              example: 'Discover the durability and simple beauty'
            },
            collection_image: {
              type: 'string',
              example: 'uploads/collections/collection_image-1234567890.jpg'
            },
            banner_image: {
              type: 'string',
              example: 'uploads/collections/banner_image-1234567890.jpg'
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            }
          }
        },
        ProductFinish: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            title: {
              type: 'string',
              example: 'Glossy Wood Finish'
            },
            image: {
              type: 'string',
              example: 'glossy-wood-finish.jpg'
            },
            finishes_type_id: {
              type: 'integer',
              example: 1
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            }
          }
        },
        ProductPrice: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            product_id: {
              type: 'integer',
              example: 5
            },
            name: {
              type: 'string',
              example: 'Small Terracotta Pot'
            },
            a_size: {
              type: 'string',
              example: '10cm'
            },
            b_size: {
              type: 'string',
              example: '8cm'
            },
            c_size: {
              type: 'string',
              example: '12cm'
            },
            d_size: {
              type: 'string',
              example: '15cm'
            },
            h_size: {
              type: 'string',
              example: '20cm'
            },
            price_in_inr: {
              type: 'number',
              format: 'float',
              example: 299.99
            },
            price_in_usd: {
              type: 'number',
              format: 'float',
              example: 3.60
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            }
          }
        },
        ProductSize: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            name: {
              type: 'string',
              example: 'Small'
            },
            alphabet: {
              type: 'string',
              example: 'S'
            },
            status: {
              type: 'integer',
              enum: [0, 1, 2],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            }
          }
        },
        ThankYouPage: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1
            },
            title: {
              type: 'string',
              example: 'Thank You for Contacting Bonasila!'
            },
            status: {
              type: 'integer',
              enum: [0, 1],
              example: 1
            },
            created_on: {
              type: 'string',
              format: 'date-time'
            },
            updated_on: {
              type: 'string',
              format: 'date-time'
            },
            deleted_on: {
              type: 'string',
              format: 'date-time',
              nullable: true
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              example: 'Error message'
            },
            status: {
              type: 'boolean',
              example: false
            }
          }
        }
      },
      responses: {
        NotFound: {
          description: 'Resource not found',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Resource not found'
                  },
                  status: {
                    type: 'boolean',
                    example: false
                  }
                }
              }
            }
          }
        },
        ValidationError: {
          description: 'Validation error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Validation failed'
                  },
                  errors: {
                    type: 'object',
                    description: 'Validation errors by field'
                  },
                  status: {
                    type: 'boolean',
                    example: false
                  }
                }
              }
            }
          }
        },
        Unauthorized: {
          description: 'Unauthorized access',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Unauthorized access'
                  },
                  status: {
                    type: 'boolean',
                    example: false
                  }
                }
              }
            }
          }
        },
        ServerError: {
          description: 'Internal server error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: {
                    type: 'string',
                    example: 'Something went wrong'
                  },
                  status: {
                    type: 'boolean',
                    example: false
                  }
                }
              }
            }
          }
        }
      }
    },
    tags: [
      {
        name: 'Admin Management',
        description: 'Admin authentication and profile management'
      },
      {
        name: 'Admin - 404 Page Management',
        description: '404 page content management'
      },
      {
        name: 'Admin - About Page Management',
        description: 'About page content management'
      },
      {
        name: 'Admin - About Page Team Management',
        description: 'About page team members management'
      },
      {
        name: 'Admin - Alliance Page Management',
        description: 'Alliance page content management'
      },
      {
        name: 'Admin - Beyond Boundary Page Management',
        description: 'Beyond boundary page content management'
      },
      {
        name: 'Admin - Career Page Management',
        description: 'Career page content management'
      },
      {
        name: 'Admin - Career Posting Management',
        description: 'Career job posting management'
      },
      {
        name: 'Admin - Catalogues Page Management',
        description: 'Catalogues page content management'
      },
      {
        name: 'Admin - Contact Management',
        description: 'Contact requests management'
      },
      {
        name: 'Admin - Contact Page Management',
        description: 'Contact page content management'
      },
      {
        name: 'Admin - DIY Page Management',
        description: 'DIY page content management'
      },
      {
        name: 'Admin - FAQ Page Management',
        description: 'FAQ page content management'
      },
      {
        name: 'Admin - F-Factor Page Management',
        description: 'F-Factor page content management'
      },
      {
        name: 'Admin - Finish Type Management',
        description: 'Product finish types management'
      },
      {
        name: 'Admin - Gallery Management',
        description: 'Gallery pages management'
      },
      {
        name: 'Admin - Gallery Section Management',
        description: 'Gallery sections management'
      },
      {
        name: 'Admin - Home Page Management',
        description: 'Homepage content management'
      },
      {
        name: 'Admin - Meta Content Management',
        description: 'SEO meta content management'
      },
      {
        name: 'Admin - Page Items Management',
        description: 'Page list items management'
      },
      {
        name: 'Admin - Product Media Management',
        description: 'Product media files management'
      },
      {
        name: 'Admin - Press Release Management',
        description: 'Press release pages management'
      },
      {
        name: 'Admin - Press Release Section Management',
        description: 'Press release section content management'
      },
      {
        name: 'Admin - Product Collection Management',
        description: 'Product collections management'
      },
      {
        name: 'Admin - Product Finishes Management',
        description: 'Product finishes management'
      },
      {
        name: 'Admin - Product Price Management',
        description: 'Product pricing management'
      },
      {
        name: 'Admin - Product Size Management',
        description: 'Product sizes management'
      },
      {
        name: 'Admin - Thank You Page Management',
        description: 'Thank you page content management'
      },
      {
        name: 'Web API - Homepage',
        description: 'Public homepage endpoints'
      },
      {
        name: 'Web API - Pages',
        description: 'Public web API endpoints for pages'
      },
      {
        name: 'Web API - Meta Content',
        description: 'Public meta content endpoints'
      },
      {
        name: 'Web API - Pages',
        description: 'Public page content endpoints'
      },
      {
        name: 'Web API - Products',
        description: 'Public product catalog endpoints'
      },
      {
        name: 'Web API - Gallery',
        description: 'Public gallery endpoints'
      },
      {
        name: 'Web API - Contact',
        description: 'Public contact form endpoints'
      },
    ]
  },
  apis: ['./routers/*.js','./docs/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};