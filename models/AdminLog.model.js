const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const AdminLog = sequelize.define('AdminLog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  admin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Admin',
      key: 'id',
    },
  },
  public_ip: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  local_ip: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  login_time: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  logout_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  user_agent: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'admin_logs',
  timestamps: false,
});

// Define association
AdminLog.belongsTo(require('./Admin.model'), {
  foreignKey: 'admin_id',
  as: 'admin'
});

module.exports = AdminLog;