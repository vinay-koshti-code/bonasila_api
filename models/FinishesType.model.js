const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index'); // adjust path as needed

const Product_finish_type = sequelize.define('Product_finish_type', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  video_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  video_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  long_title: {
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
  tableName: 'product_finish_types',
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

module.exports = Product_finish_type;