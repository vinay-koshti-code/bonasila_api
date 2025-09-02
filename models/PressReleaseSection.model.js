const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const PressReleaseSectionPage = sequelize.define('PressReleaseSection', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tag_line: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  header_description: {
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
  tableName: 'press_release-section',
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

// PressReleaseSectionPage.sync({alter: true})
module.exports = PressReleaseSectionPage;