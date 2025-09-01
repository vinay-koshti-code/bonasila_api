const envConfig = require("../../config/env.config");
const Admins = require("../../models/Admin.model")
const AdminLog = require("../../models/AdminLog.model");
const AppError = require("../../helpers/errorHandler");
const axios = require('axios');

class AdminController{

        static async logAdminLogin(req, adminId) {
        try {
            const publicIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.ip;
            const userAgent = req.headers['user-agent'];
            
            let locationData = {};
            try {
                const response = await axios.get(`http://ip-api.com/json/${publicIp}`);
                if (response.data.status === 'success') {
                    locationData = {
                        city: response.data.city,
                        state: response.data.regionName,
                        country: response.data.country
                    };
                }
            } catch (error) {
                console.log('Location lookup failed:', error.message);
            }

            await AdminLog.create({
                admin_id: adminId,
                public_ip: publicIp,
                local_ip: req.socket.localAddress,
                login_time: new Date(),
                user_agent: userAgent,
                ...locationData
            });
        } catch (error) {
            console.log('Failed to log admin login:', error.message);
        }
    }

    
    async loginAdmin(req, res) {
        try{
            const { email, password } = req.body;
            
            if (!email || !password) {
                return res.status(400).json({message: "Email and password are required", status:false} );
            }

            const validateAdmin = await Admins.scope("withPassword").findOne({ where: { email } });

            if(!validateAdmin){
                if(email === "admin@bonasila.com" && password === "admin"){
                    const admin = await AdminController.createAdmin(email, password);
                    return res.json({ message: "Admin created successfully", data: admin.data, status: true });
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
                    return res.status(400).json({message:"Invalid password", status: false})
                }
            } else {
                return res.status(400).json({message: "Email not found", status:false})
            }
        }catch(error){
            return res.status(error.statusCode || 500).json({ 
                message: error.message || "Login failed",
                status: false 
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
            return res.json({ message: "Admin profile", data: responseData })
        } catch(error) {
            return res.status(error.statusCode || 500).json({ 
                message: error.message || "Failed to get admin profile",
                status: false 
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
                data: result.rows,
                total: result.count,
                message: "Admin logs fetched successfully",
                status: true,
            });
        } catch (error) {
            return res.status(500).json({ 
                status: false, 
                message: "Something went wrong" 
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