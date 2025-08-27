const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const ContactPage = sequelize.define('ContactPage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    defaultValue: 1, // Enforce a single row with ID 1
  },
  tag_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  header_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  form_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  form_footer_details: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  form_footer_highlights: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sales_person: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sales_person_position: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sales_person_info: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sales_person_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address_info: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  phone_1: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  phone_2: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  phone_3: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  footer_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image_alt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  footer_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  footer_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  footer_link_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // Common Fields
  status: {
    type: DataTypes.INTEGER, // 0: inactive, 1: active
    defaultValue: 1,
    allowNull: false,
  },
}, {
  tableName: 'contact_page',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: 1, // Only fetch active records
    },
  },
  scopes: {
    unscoped: {},
  },
});

module.exports = ContactPage;