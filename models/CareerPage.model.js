const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const CareerPage = sequelize.define('CareerPage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    defaultValue: 1,
  },
  tag_link: {
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
  page_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  page_link_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  header_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  header_description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  invited_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  invited_subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  invited_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  invited_image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('invited_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  invited_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  invited_link_title: {
    type: DataTypes.STRING,
    allowNull: true,
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
  about_image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('about_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  about_link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  about_link_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  form_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  form_footer_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  footer_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  footer_title_image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('footer_title_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  footer_content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  footer_image: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('footer_image');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  // Common Fields
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
}, {
  tableName: 'career_page',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: 1,
    },
  },
  scopes: {
    unscoped: {},
  },
});

module.exports = CareerPage;