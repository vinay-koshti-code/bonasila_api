const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const AboutPageTeam = sequelize.define('AboutPageTeam', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  facebook_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  instagram_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  linkedin_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image_alt: {
    type: DataTypes.STRING,
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
  tableName: 'about_page_team',
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

module.exports = AboutPageTeam;