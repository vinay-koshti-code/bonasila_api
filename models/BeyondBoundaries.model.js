const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const BeyondBoundaryPage = sequelize.define('BeyondBoundaryPage', {
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
  footer_text: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  video_autoplay: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('video_autoplay');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  header_image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('header_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  footer_pincode_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  footer_pincode_text: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  footer_pincode_video: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('footer_pincode_video');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  list_header: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  list_footer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // Common Fields
  status: {
    type: DataTypes.INTEGER, // 0: inactive, 1: active
    defaultValue: 1,
    allowNull: false,
  },
}, {
  tableName: 'beyond_boundary_page',
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

module.exports = BeyondBoundaryPage;