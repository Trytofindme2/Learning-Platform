const adminService = require('../service/adminService')
const tokenGenerator = require('../helper/tokengenerator')

const adminController = {
    
    register : async (req,res) => {
        try{
            const { email , password , name } = req.body;
            const admin = await adminService.register(email,password,name);
            res.status(200).json({msg : 'success' , admin})
        }catch(error){
            res.status(500).json({errorMessage : error.message})
        }
    },

    login : async (req,res) => {
       try{
            const { email , password } = req.body;
            const admin = await adminService.login(email,password);
            const token = tokenGenerator(admin.id,admin.email,admin.role)
            res.cookie('admin-token' , token , { httpOnly: true , path: '/admin' ,maxAge : 60 * 60 * 1000 })
            res.status(200).json({msg : 'success' , admin})
       }catch(error){
            res.status(500).json({errorMessage : error.message})
       }
    },

    createCourse : async (req,res) => {
        try {
            const course = await adminService.createCourse(req.body);
            res.status(200).json({msg : 'success' , course})
        } catch (error) {
            res.status(500).json({errorMessage : error.message})
        }
    }
}

module.exports = adminController;