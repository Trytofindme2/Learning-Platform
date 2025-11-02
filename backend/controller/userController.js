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
            const user_token = tokeGenerator(user.id , user.email , user.role)
            res.cookie('user-token' , user_token , { httpOnly: true , path: '/user' ,maxAge : 60 * 60 * 1000 })
            res.status(200).json({msg : 'success' , user})
       }catch(error){
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
            const { token } = req.body; 
            const { user, appToken } = await userService.googleSignIn(token);
            res.cookie('user-token',appToken,{ httpOnly: true , path: '/user' ,maxAge : 60 * 60 * 1000 })
            res.status(200).json({
                msg: 'Google Sign-In success',
                user,
                token: appToken,
            });
        } catch (error) {
            res.status(401).json({ errorMessage: error.message });
        }
    },

     addUserInfo : async (req,res) => {
        try {
            const data = { ...req.body }
            const id = req.params.id
            if (req.file){
                data.avatar = req.file.filename
            }
            const user = await userService.addUserInfo(id, data)
            res.status(200).json({msg : 'success' , user})
        } catch (error) {
            res.status(500).json({errorMessage : error.message})
        }
    },

    log_out: (req, res) => {
        res.clearCookie('user-token', {
            httpOnly: true,
            path: '/user'
        });
        return res.status(200).json({ msg: 'log-out successfully' });
    }

    
}

module.exports = userController;