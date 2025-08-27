const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');
const PageListItems = require('./PageListItems.model'); // Reference to the PageListItems table

const PageMedia = sequelize.define('PageMedia', {
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
  block_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: PageListItems,
      key: 'id',
    },
  },
  media_type: {
    type: DataTypes.ENUM('image', 'video', 'pdf'),
    allowNull: false,
  },
  file_url: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  alt_text: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  order_no: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.TINYINT, // 0: inactive, 1: active, 2: deleted
    defaultValue: 1,
    allowNull: false,
  },
  deleted_on: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'page_media',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: { [Op.in]: [0, 1] },
    },
  },
  scopes: {
    unscoped: {},
  },
});

PageListItems.hasMany(PageMedia, { foreignKey: 'block_id' });
PageMedia.belongsTo(PageListItems, { foreignKey: 'block_id' });

module.exports = PageMedia;