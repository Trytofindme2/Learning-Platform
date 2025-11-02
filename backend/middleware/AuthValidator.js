const jwt = require('jsonwebtoken')

const AuthValidator =(req,res,next) => {
    let token = req.cookies.user_token
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decodedValue) => {
            if(err){
                return res.status(401).json({msg : 'unauthenticated account'})
            }else{
                console.log(decodedValue);
                next()
            }
        })
    }else{
        return res.status(400).json({errorMessage : 'token need to provide'})
    }
}

module.exports = AuthValidator