require('dotenv').config()
const express = require('express')
const adminRouter = require('./router/adminRouter')
const morgan = require('morgan')
const server = express()

server.use(morgan('dev'))
server.use(express.json())

server.use('/admin' , adminRouter)


server.listen(process.env.PORT, () => {
    console.log(`app start at ${process.env.PORT}`);
})