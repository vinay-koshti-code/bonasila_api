const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index'); 

const Request = sequelize.define('Contact', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  request_type: {
    type: DataTypes.ENUM(
      'design_for_us',
      'business_request',
      'inquiry',
      'buying_request',
      'contact_request',
      'newsletter_request',
      'alliance_request',
      'career_request',
      'faq_request',
      'catalogue_request'
    ),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  file: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('file');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  posted_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1,
    allowNull: false,
  },
  extra: {
    type: DataTypes.JSON,
    allowNull: true,
  },
}, {
  tableName: 'contacts',
  timestamps: false,
  defaultScope: {
    where: {
      status: { [Op.in]: [0, 1] }, // 0: inactive, 1: active
    },
  },
  scopes: {
    unscoped: {},
  },
});

module.exports = Request;