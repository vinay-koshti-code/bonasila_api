const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');
const PageListItems = require('./PageListItems.model'); // Reference to the PageListItems table
const ProductMedia = require('./ProductMedia');
const PageMediaItem = require('./ProductMediaItem.model');

const PageMedia = sequelize.define('PageMedia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  media_type: {
    type: DataTypes.ENUM('image', 'video', 'pdf'),
    allowNull: false,
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
  tableName: 'product_media_null',
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


// ProductMedia.hasMany(PageMediaItem, {
//   foreignKey: 'media_id',
//   as: 'media_items'
// })

// PageMediaItem.belongsTo(ProductMedia, {
//   foreignKey: 'media_id',
//   as: 'media'
// })
// PageListItems.hasMany(PageMedia, { foreignKey: 'block_id' });
// PageMedia.belongsTo(PageListItems, { foreignKey: 'block_id' });
// PageMedia.sync({force: true})
module.exports = PageMedia;