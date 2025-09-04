const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');
const Product = require('./Product.model'); // Import the Product model

const Product_Price = sequelize.define('Product_Price', {
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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  a_size: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  b_size: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  c_size: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  d_size: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  h_size: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price_in_inr: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  price_in_usd: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  hollowbody_price_in_inr: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  hollowbody_price_in_usd: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  fullbody_price_in_inr: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  fullbody_price_in_usd: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  deleted_on: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'product_prices',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
});

// Product_Price.sync({alter: true})

module.exports = Product_Price;