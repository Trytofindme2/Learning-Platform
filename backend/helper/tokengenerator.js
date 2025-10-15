const jwt = require('jsonwebtoken')

const tokeGenerator = (id , email , role) => {
    let payload = { id , email , role}
    let SECRET_KEY = process.env.JWT_SECRET
    return jwt.sign(payload , SECRET_KEY , { expiresIn : '1h'})
}

module.exports = tokeGenerator