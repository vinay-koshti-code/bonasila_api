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
    allowNull: false,
    references: {
      model: 'products',
      key: 'id',
    },
  },
  type: {
    type: DataTypes.ENUM('image', 'video'),
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alt_text: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
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
  tableName: 'product_media',
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



module.exports = ProductMedia;