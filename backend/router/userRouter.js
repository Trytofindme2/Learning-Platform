const express = require('express')
const userController = require('../controller/userController')
const { body } = require('express-validator')
const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()
const expressValidator = require('../middleware/expressValidator')
const userRouter = express.Router()

userRouter.post('/register',[
    body('email').notEmpty().withMessage('email needs to provide').custom(async(value) => {
        const isExit = await prisma.student.findUnique({
            where : {
                email : value
            }
        })
        if(isExit){
            throw new Error('user account with this gmail already exited')
        }
    }).isEmail().withMessage('invaild email'),
    body('re-password').notEmpty().withMessage('password confirmation need to provide').custom((value , {req}) => {
        if(value !== req.body.password){
            throw new Error('password does not match')
        }
        return true;
    }),
    body('password').notEmpty().withMessage('password needs to provide').isLength({min : 6}).withMessage('password must be at least 6 characters long')
], expressValidator ,userController.register)


userRouter.post('/log-in' , [
    body('email').notEmpty().withMessage('email need to provide').bail(),
    body('password').notEmpty().withMessage('password need to provide'),
] , expressValidator , userController.login)


userRouter.patch('/addUserInfo/:id',userController.addUserInfo)

module.exports = userRouter;