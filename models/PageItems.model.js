const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const PageListItems = sequelize.define('PageListItems', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  page_type: {
    type: DataTypes.ENUM(
      'home_page',
      'about_page',
      'career_page',
      'contact_page',
      'ffactor_page',
      'beyond_boundary_page',
      'diy_page',
      'faq_page',
      'alliance_page',
      'press_release_page',
      'catalogues_page',
      'gallery_page'
    ),
    allowNull: false,
  },
  list_type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  link_url: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  order_no: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.TINYINT, // 0: inactive, 1: active
    defaultValue: 1,
    allowNull: false,
  },
  deleted_on: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'page_list_items',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: 1, // Only fetch active records by default
    },
  },
  scopes: {
    withInactive: {
      where: {
        status: { [Op.in]: [0, 1] },
      },
    },
    unscoped: {},
  },
});

module.exports = PageListItems;