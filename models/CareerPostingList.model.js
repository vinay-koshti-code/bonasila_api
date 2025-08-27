const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const CareerPageLists = sequelize.define('CareerPageLists', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  posting_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apply_for_this_text: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  posting_subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  posting_location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  posting_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  about_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  about_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  usual_day_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  usual_day_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  eligibility_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  eligibility_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  additional_info_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  additional_info_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  how_to_apply_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  how_to_apply_description: {
    type: DataTypes.TEXT,
    allowNull: true,
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
  tableName: 'career_page_lists',
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

module.exports = CareerPageLists;