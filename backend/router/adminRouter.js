const express = require('express')
const adminController = require('../controller/adminController')
const { body } = require('express-validator')
const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()
const expressValidator = require('../middleware/expressValidator')
const adminRouter = express.Router()


adminRouter.post('/register', [
    body('email').notEmpty().withMessage('email need to provide').bail().custom(async (value) => {
        const isExit = await prisma.admin.findUnique({
            where : {
                email : value
            }
        })
        if(isExit){
            throw new Error('user account with this gmail already exited')
        }
    }), 
    body('password').notEmpty().withMessage('pasasword need to provide'),
    body('re-password').notEmpty().withMessage('password confirmation need to provide').custom((value,{req})=> {
        if(value !== req.body.password){
            throw new Error('password does not match')
        }
        return true
    }),
    body('name').notEmpty().withMessage('name need to provide')
] , expressValidator , adminController.register)


adminRouter.post('/log-in' , [
    body('email').notEmpty().withMessage('email need to provide').bail(),
    body('pasasword').notEmpty().withMessage('password need to provide'),
])

module.exports = adminRouter;
