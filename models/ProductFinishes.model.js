const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index'); // adjust path as needed
const ProductFinishType = require('./FinishesType.model'); // Import the finishes type model

const Product_finishes = sequelize.define('Product_finishes', {
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
  image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  finishes_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ProductFinishType,
      key: 'id',
    },
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
  tableName: 'product_finishes',
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

ProductFinishType.hasMany(Product_finishes, { foreignKey: 'finishes_type_id' });
Product_finishes.belongsTo(ProductFinishType, { foreignKey: 'finishes_type_id' });

// Product_finishes.sync({ alter: true}); // Ensure the table is created
// ProductFinishType.sync({alter: true})
module.exports = Product_finishes;