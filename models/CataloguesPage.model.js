const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const CataloguesPage = sequelize.define('CataloguesPage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    defaultValue: 1, // Enforce a single row with ID 1
  },
  form_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pdf_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // Common Fields
  status: {
    type: DataTypes.INTEGER, // 0: inactive, 1: active
    defaultValue: 1,
    allowNull: false,
  },
  deleted_on: {
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  tableName: 'catalogues_page',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: [0,1], // Only fetch active records
    },
  },
  scopes: {
    unscoped: {},
  },
});

module.exports = CataloguesPage;