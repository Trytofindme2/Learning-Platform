const bcrypt = require('bcrypt')
const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient();

const adminService = {
    register : async (email,password,name) => {
       try {
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(password,salt)
            const admin = await prisma.admin.create({
                data : {
                    email,
                    password : hashpassword,
                    name
                }
            })
            return admin;
       } catch (error) {
          console.log(error);
       }
    },

    login : async (email,password) => {
        const exitUser = await prisma.admin.findUnique({
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

module.exports = adminService