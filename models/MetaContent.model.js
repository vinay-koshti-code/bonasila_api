const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index'); // adjust path as needed

const MetaContent = sequelize.define('MetaContent', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  page_slug: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  page_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  status: {
    type: DataTypes.TINYINT, // 0: inactive, 1: active
    defaultValue: 1,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  keywords: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  header_script: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'metacontent',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: 1, // Only fetch active records by default
    },
  },
  scopes: {
    withInactive: {
      where: {
        status: { [Op.in]: [0, 1] },
      },
    },
    unscoped: {}, // Empty scope to disable all other scopes
  },
});

module.exports = MetaContent;