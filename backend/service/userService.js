const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient();
const bcrypt = require('bcrypt')
const hashGenerator = require('../helper/hashGenerator')

const userService = {
    register : async (email,password) => {
        try {
            const hashPassword = await hashGenerator(password);
            const user = await prisma.student.create({
                data : {
                    email,
                    password : hashPassword
                }
            })
            return user
        } catch (error) {
            throw new Error(error)
        }
    },

    login : async (email,password) => {
        const exitUser = await prisma.student.findUnique({
            where : {
                email
            }
        })
        if(!exitUser){
            throw new Error('user account does not exit');
        }
        const passwordCheck = await bcrypt.compare(password,exitUser.password);
        if(!passwordCheck){
            throw new Error('password does not correct');
        }
        return exitUser;
     }
}

module.exports = userService;