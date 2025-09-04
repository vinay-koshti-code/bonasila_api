const envConfig = require("../../config/env.config");
const Admins = require("../../models/Admin.model")
const AdminLog = require("../../models/AdminLog.model");
const AppError = require("../../helpers/errorHandler");
const axios = require('axios');

class AdminController{

    static async logAdminLogin(req, adminId) {
        try {
            const privateIP = req.clientIp;
            const publicIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.ip;
            const userAgent = req.headers['user-agent'];

            await AdminLog.create({
                admin_id: adminId,
                local_ip: privateIP,
                public_ip: publicIP,
                login_time: new Date(),
                user_agent: userAgent
            });
        } catch (error) {
            console.log('Failed to log admin login:', error.message);
        }
    }

    
    async loginAdmin(req, res) {
        try{
            const { email, password } = req.body;
            
            if (!email || !password) {
                return res.status(400).json({status:false, message: "Email and password are required"} );
            }

            const validateAdmin = await Admins.scope("withPassword").findOne({ where: { email } });

            if(!validateAdmin){
                if(email === "admin@bonasila.com" && password === "admin"){
                    const admin = await AdminController.createAdmin(email, password);
                    return res.json({ status: true, message: "Admin created successfully", data: admin.data  });
                }
            }
            if (validateAdmin) {
                const checkPassword = await validateAdmin.comparePassword(password)
                if (checkPassword) {
                    // Log admin login
                    await AdminController.logAdminLogin(req, validateAdmin.id);
                    
                    const token = validateAdmin.generateAuthToken();
                    const responseData = validateAdmin.getProfile();
                    return res.json({ message: "Login successful", data: {...responseData, ...token}, status:true });
                } else {
                    return res.status(400).json({ status: false, message:"Invalid password"})
                }
            } else {
                return res.status(400).json({ status:false, message: "Email not found"})
            }
        }catch(error){
            return res.status(error.statusCode || 500).json({ 
                status: false,
                message: error.message || "Login failed",
            });
        }
    }
    
    async getAdminProfile (req, res) {
        try {
            const {id} = req.user;
            if(!id)
                throw new AppError("Admin not found", 400)
            const Admin = await Admins.findOne({where:{id}});
            if(!Admin)
                throw new AppError("Admin not found", 400)
            const responseData = Admin.getProfile();
            return res.json({ status: true, message: "Admin profile", data: responseData })
        } catch(error) {
            return res.status(error.statusCode || 500).json({ 
                status: false, 
                message: error.message || "Failed to get admin profile",
            });
        }
    }

    async getAdminLogs(req, res) {
        try {
            const { page, limit, admin_id } = req.query;
            const pageInt = parseInt(page) || 1;
            const limitInt = parseInt(limit) || 10;
            const offset = (pageInt - 1) * limitInt;
            let where = {};

            if (admin_id) {
                where.admin_id = admin_id;
            }

            const result = await AdminLog.findAndCountAll({
                where,
                offset,
                limit: limitInt,
                order: [['login_time', 'DESC']]
            });

            return res.status(200).json({
                status: true,
                message: "Admin logs fetched successfully",
                data: result.rows,
                totalCount: result.count,
                currentPage: pageInt,
                totalPages: Math.ceil(result.count / limitInt),
                rowPerPage: limitInt,
            });
        } catch (error) {
            return res.status(500).json({ 
                status: false, 
                message: err.message 
            });
        }
    }


    static async createAdmin(email, password) {
    try {
        // Check if admin already exists
        const existingAdmin = await Admins.findOne();
        
        if (existingAdmin) {
            return {
                status: false,
                message: "Admin already exists"
            };
        }

        // Create new admin if none exists
        const newAdmin = await Admins.create({
            email,
            password,
            name: "admin"
        });

        return {
            status: true,
            message: "Admin created successfully",
            data: newAdmin.getProfile()
        };

    } catch (error) {
        return {
            status: false,
            message: error.message || "Failed to create admin"
        };
    }
}    
}

module.exports = new AdminController();