const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const AlliancesPage = sequelize.define('AlliancesPage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    defaultValue: 1, // Enforce a single row with ID 1
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  header_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  header_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  alliance_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  form_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  form_footer_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  finishes_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  finishes_subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  finishes_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  finishes_link_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  finishes_link_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  list_header: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  list_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  list_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ffactor_header: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ffactor_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ffactor_link_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ffactor_link_url: {
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
  tableName: 'alliances_page',
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

module.exports = AlliancesPage;