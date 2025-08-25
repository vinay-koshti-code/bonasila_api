const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const ProductSizeMapping = sequelize.define('ProductSizeMapping', {
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
  size_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
}, {
  tableName: 'product_size_mappings',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  indexes: [
    {
      unique: true,
      fields: ['product_id', 'size_id']
    }
  ]
});

module.exports = ProductSizeMapping;