const adminService = require('../service/adminService')

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
            res.status(200).json({msg : 'success' , admin})
       }catch(error){
            res.status(500).json({errorMessage : error.message})
       }
    }
}

module.exports = adminController;