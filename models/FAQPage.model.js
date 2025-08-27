const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const FAQPage = sequelize.define('FAQPage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    defaultValue: 1, // Enforce a single row with ID 1
  },
  tag_line: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  faq_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  form_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  form_submit_text: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  form_footer_text: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // Common Fields
  status: {
    type: DataTypes.INTEGER, // 0: inactive, 1: active
    defaultValue: 1,
    allowNull: false,
  },
}, {
  tableName: 'faq_page',
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

module.exports = FAQPage;