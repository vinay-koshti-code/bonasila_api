const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const PressReleasePage = sequelize.define('PressReleasePage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  banner_image:{
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue('banner_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue('image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  image_alt: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  header:{
    type: DataTypes.STRING,
    allowNull: false
  },
  image_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
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
  tableName: 'press_release_page',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: { [Op.in]: [0, 1] }, // Only fetch active or inactive records
    },
  },
  scopes: {
    unscoped: {},
  },
});

module.exports = PressReleasePage;