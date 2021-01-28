const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const fileUpload = require('express-fileupload')

const {userRouter, zakladRouter, commentRouter, newspaperRouter, ratingRouter, refreshTokenRouter} = require('./routers')

const server = express()

dotenv.config({})

server.use(express.static(path.join(process.cwd(), 'public', 'userPhoto')))
server.use(express.static(path.join(process.cwd(), 'public', 'zakladPhoto')))


server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(fileUpload({}))


server.use('/users', userRouter)
server.use('/zaklads', zakladRouter)
server.use('/comments', commentRouter)
server.use('/newspapers', newspaperRouter)
server.use('/refresh', refreshTokenRouter)
server.use('/rating', ratingRouter)


server.use('*', (err, req, res, next) => {
    res.status(err.status)
        .json({
            message: err.message,
            code: err.customCode
        })
})

module.exports = {server}
