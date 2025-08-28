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
      }
    },
    tags: [
      {
        name: 'Admin',
        description: 'Admin management endpoints'
      }
    ]
  },
  apis: ['./routers/*.js','./docs/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};