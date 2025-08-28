const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const FFactorPage = sequelize.define('FFactorPage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    defaultValue: 1, // Enforce a single row with ID 1
  },
  tag_line: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  header: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  header_image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('header_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  header_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  header_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  perffection_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  perffection_subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  perffection_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  perffection_video: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('perffection_video');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  about_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  about_subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  about_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  about_footer_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  footer_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  footer_subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  footer_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  footer_video: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('footer_video');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  footer_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  footer_link_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // Common Fields
  status: {
    type: DataTypes.INTEGER, // 0: inactive, 1: active
    defaultValue: 1,
    allowNull: false,
  },
}, {
  tableName: 'ffactor_page',
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

module.exports = FFactorPage;