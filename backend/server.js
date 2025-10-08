require('dotenv').config()
const express = require('express')
const cors = require('cors')
const adminRouter = require('./router/adminRouter')
const userRouter = require('./router/userRouter')
const morgan = require('morgan')
const server = express()


server.use(morgan('dev'))

server.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,               
}));

server.use(express.json())

server.use('/admin' , adminRouter)
server.use('/student', userRouter)


server.listen(process.env.PORT, () => {
    console.log(`Server start at ${process.env.PORT}`);
})