const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const DIYPage = sequelize.define('DIYPage', {
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
  video_file: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bottom_title_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bottom_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bottom_allow_files: {
    type: DataTypes.STRING, // Can be a boolean, but string is more flexible
    allowNull: true,
  },
  bottom_info: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  bottom_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  popup_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  popup_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  popup_file: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  footer_text: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  list_footer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  list_header: {
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
  tableName: 'diy_page',
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

module.exports = DIYPage;