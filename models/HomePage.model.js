const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const HomePage = sequelize.define('HomePage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    defaultValue: 1, // Enforce a single row with ID 1
  },
  slide_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slide_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pushup_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pushup_link_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pushup_header: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pushup_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  pushup_description_1: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  pushup_link_1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pushup_link_title_1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pushup_description_2: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  video_file_autoplay: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  plant_lover_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  plant_lover_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  slider_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slider_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  slider_footer_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slider_footer_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  client_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  client_image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  client_image_alt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
//   // Common Fields
//   status: {
//     type: DataTypes.INTEGER, // 0: inactive, 1: active
//     defaultValue: 1,
//     allowNull: false,
//   },
}, {
  tableName: 'homepage',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
});

module.exports = HomePage;