const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const VideoSection = sequelize.define('VideoSection', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    defaultValue: 1,
  },
  tag_line: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  video_file: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('video_file');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  youtube_video: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
}, {
  tableName: 'video_section',
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

module.exports = VideoSection;