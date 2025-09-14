const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient();
const convertDate = require('../helper/convertDate')
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
    },

    addUserInfo : (id,info) => {
        try {
            const userInfo = prisma.student.update({
                where : {
                    id
                },
                data : {
                    ...info,
                    birthday : convertDate(info.birthday),
                }
            })
            return userInfo
        } catch (error) {
            throw new Error(`cannot update ${error}`)
        }
    }
}

module.exports = userService;