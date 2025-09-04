const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const ProductMedia = sequelize.define('ProductMedia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('image', 'video'),
    allowNull: false,
  },
  file: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('file');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  file_alt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
    comment: "1=active, 0=inactive, 2=deleted"
  },
  deleted_on: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'product_media_items',
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


// ProductMedia.sync({ force: true });
module.exports = ProductMedia;