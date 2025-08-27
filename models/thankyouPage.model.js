const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const ThankYouPage = sequelize.define('ThankYouPage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    defaultValue: 1, // Enforce a single row with ID 1
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Common Fields
  status: {
    type: DataTypes.INTEGER, // 0: inactive, 1: active
    defaultValue: 1,
    allowNull: false,
  },
  deletedOn: {
    type: DataTypes.DATE,
    allowNull: true,
  }
}, {
  tableName: 'thankyou_page',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: 1, // Only fetch active records
    },
  },
  scopes: {
    unscoped: {},
  },
});

module.exports = ThankYouPage;