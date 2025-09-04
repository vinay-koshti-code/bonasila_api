const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const FourOFourPage = sequelize.define('FourOFourPage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    defaultValue: 1, // Enforce a single row with ID 1
  },
  page_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  page_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  page_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  page_link_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  // Common Fields
  status: {
    type: DataTypes.INTEGER, // 0: inactive, 1: active
    defaultValue: 1,
    allowNull: false,
  },
    deleted_on: {
        type: DataTypes.DATE,
        allowNull: true,
    }
}, {
  tableName: '404_page',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: [0,1], // Only fetch active records
    },
  },
  scopes: {
    unscoped: {},
  },
});

// FourOFourPage.sync({ alter: false });

module.exports = FourOFourPage;