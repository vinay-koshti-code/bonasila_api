const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const ThankYouPage = sequelize.define('ThankYouPage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  page_type: {
    type: DataTypes.ENUM(
      'general',
      'alliance_request',
      'contact_request',
      'career_request',
      'footer_request',
      'business_request',
      'talk_to_us',
      'design_for_us_request'
    ),
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  background_image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('background_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  logo_image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('logo_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
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
  }
}, {
  tableName: 'thankyou_page',
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

ThankYouPage.sync({ force: false, alter: false }).then(() => {
  console.log('ThankYouPage model synced');
});

module.exports = ThankYouPage;