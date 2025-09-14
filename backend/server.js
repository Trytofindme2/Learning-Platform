require('dotenv').config()
const express = require('express')
const adminRouter = require('./router/adminRouter')
const userRouter = require('./router/userRouter')
const morgan = require('morgan')
const server = express()

server.use(morgan('dev'))
server.use(express.json())

server.use('/admin' , adminRouter)
server.use('/student', userRouter)


server.listen(process.env.PORT, () => {
    console.log(`Server start at ${process.env.PORT}`);
})