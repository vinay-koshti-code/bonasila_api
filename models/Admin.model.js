const DataTypes = require("sequelize");
const sequelize = require("./index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const config = require("../config/env.config")

const attributs = {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: 1,
        comment: "1=active, 0=inactive, 2=deleted"
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}

const options = {
    tableName: "Admin",
    timestamps: true,
    defaultScope: {
        attributes: { exclude: ["password"] }
    },
    scopes: {
        withPassword: {
            attributes: { include: ["password"] }
        }
    },
    hooks: {
        beforeCreate: async (user) => {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        },
        beforeUpdate: async (user) => {
            if (user.changed("password")) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    }
}

const Admin = sequelize.define("Admin", attributs, options);

Admin.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

Admin.prototype.generateAuthToken = function () {

    const payload = {
        id: this.id,
        name: this.name,
        email: this.email,
        role: this.role === 1 ? "admin" : "user",
    }

    const accessToken = jwt.sign(payload, config.JWT_ACCESS_SECRET_KEY, {
        expiresIn: config.JWT_ACCESS_EXPIRES
    });

    const refreshToken = jwt.sign(payload, config.JWT_REFRESH_SECRET_KEY, {
        expiresIn: config.JWT_REFRESH_EXPIRES
    });
    return { accessToken, refreshToken };
}

Admin.prototype.generateResetToken = function () {
    const resetToken = jwt.sign({id: this.id}, config.JWT_REFRESH_EXPIRES, {
        expiresIn: "5m"
    });    
    return resetToken;
}

Admin.prototype.getProfile = function () {
    return {
        id: this.id,
        name: this.name,
        email: this.email
    }
}

module.exports = Admin;