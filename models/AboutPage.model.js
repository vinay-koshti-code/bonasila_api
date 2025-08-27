const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const AboutPage = sequelize.define('AboutPage', {
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
  header: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sub_header: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  header_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
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
  tableName: 'about_page',
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

module.exports = AboutPage;