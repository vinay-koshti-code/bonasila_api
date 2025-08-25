
const jwt = require("jsonwebtoken");
const envConfig = require("../config/env.config");

/**
 * middleware to verify JWT token
 * @param {*} req 
 * @param {*} res 
 * @param {function} next 
 */
exports.verifyToken = (req, res, next) => {
    let token = req.headers["x-auth-token"] || req.headers.authorization;
    if (token && token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
    }
    if (token && token !== "") {
        try {
            const decoded = jwt.verify(token, envConfig.JWT_ACCESS_SECRET_KEY);
            req.user = decoded;
            next();
        } catch (error) {
                return res.status(401).send({ status: false, message: "Invalid token. Please log in again." });        }
    } else {
        return res.status(401).send({ status: false, message: 'Access denied. No token provided.' });
    }
}
