const userService = require('../service/userService')

const userController = {
    register : async (req,res) => {
        try {
            const { email , password } = req.body;
            const user = await userService.register(email , password);
            res.status(200).json({msg : 'success' , user})
        } catch (error) {
            res.status(500).json({errorMessage : error.message})
        }
    },

    login : async (req,res) => {
       try{
            const {email , password } = req.body;
            const user = await userService.login(email,password);
            res.status(200).json({msg : 'success' , user})
       }catch(error){
            res.status(500).json({errorMessage : error.message})
       }
    },

    addUserInfo : async (req,res) => {
        try {
            const data = { ...req.body }
            const id = req.params.id
            const user = await userService.addUserInfo(id, data)
            res.status(200).json({msg : 'success' , user})
        } catch (error) {
            res.status(500).json({errorMessage : error.message})
        }
    },

     googleSignIn: async (req, res) => {
        try {
            const { token } = req.body; // frontend sends Google JWT
            const { user, appToken } = await userService.googleSignIn(token);

            res.status(200).json({
                msg: 'Google Sign-In success',
                user,
                token: appToken,
            });
        } catch (error) {
            res.status(401).json({ errorMessage: error.message });
        }
    }

    
}

module.exports = userController;