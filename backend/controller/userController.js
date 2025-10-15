const userService = require('../service/userService')
const tokeGenerator = require('../helper/tokengenerator')

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
            const jwt_token = tokeGenerator(user.id , user.email , user.role)
            res.cookie('user-token' , jwt_token , { httpOnly: true , path: '/user' ,maxAge : 60 * 60 * 1000 })
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

    addUserPassword : async (req,res) => {
       try {
            const { password } = req.body
            const id = req.params.id
            const user = await userService.addUserPassword(id,password)
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