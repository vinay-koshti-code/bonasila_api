const envConfig = require("../../config/env.config");
const Admins = require("../../models/Admin.model")
const AppError = require("../../helpers/errorHandler");

class AdminController{
    
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