const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient();
const convertDate = require('../helper/convertDate')
const bcrypt = require('bcrypt')
const hashGenerator = require('../helper/hashGenerator')
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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

    addUserInfo: async (id, info) => {
    try {
        const userInfo = await prisma.student.update({
        where: { id },
        data: {
            ...info,
            
            birthday: info.birthday ? new Date(info.birthday) : null,
        },
        });
        return userInfo;
    } catch (error) {
        throw new Error(`Cannot update user info: ${error}`);
    }
    },


    addUserPassword : async (id,password) => {
        try {
            const hashPassword = await hashGenerator(password)
            const userInfo = await prisma.student.update({
            where: { id },
            data: {
            password : hashPassword
            },
        });
        return userInfo;
        } catch (error) {
            throw new Error(error)
        }
    },


    googleSignIn: async (token) => {
        const ticket = await googleClient.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { sub, email, name } = payload;

        let user = await prisma.student.findUnique({ where: { email } });

        if (!user) {
            user = await prisma.student.create({
                data: {
                    email,
                    fullname : name,
                    googleId: sub,
                },
            });
        }

        const appToken = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return { user, appToken };
    },
}

module.exports = userService;