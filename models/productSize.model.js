const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index'); // adjust path as needed

const Product_size = sequelize.define('Product_size', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alphabet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Common Fields
  status: {
    type: DataTypes.INTEGER, // 0: inactive, 1: active, 2: deleted
    defaultValue: 1,
    allowNull: false,
  },
  deleted_on: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'product_sizes',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: { [Op.in]: [0, 1] }, // Only fetch active or inactive records by default
    },
  },
  scopes: {
    unscoped: {}, // Empty scope to disable all other scopes
  },
});


module.exports = Product_size;