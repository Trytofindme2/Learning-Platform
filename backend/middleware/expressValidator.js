const { validationResult  } = require('express-validator')

const expressValidator = (req,res,next) => {
    const result = validationResult(req)
    if(!result.isEmpty()){
       return res.status(500).json({errorMessage : result.array()})
    }
    else{
        next()
    }
}

module.exports = expressValidator