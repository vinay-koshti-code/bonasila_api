const { DataTypes, Op } = require('sequelize');
const sequelize = require('./index');

const ProductMediaItem = sequelize.define('ProductMediaItems', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  media_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  file: {
    type: DataTypes.STRING,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('file');
      return rawValue ? process.env.IMG_URI + rawValue : null;
    }
  },
  file_alt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
    comment: "1=active, 0=inactive, 2=deleted"
  },
  deleted_on: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'media_items',
  timestamps: true,
  createdAt: 'created_on',
  updatedAt: 'updated_on',
  defaultScope: {
    where: {
      status: { [Op.in]: [0, 1] },
    },
  },
  scopes: {
    unscoped: {},
  },
});

// ProductMediaItem.sync({force: true})

module.exports = ProductMediaItem;