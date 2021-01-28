const {Router} = require('express')

const {token} = require('../middlewares')

const {refreshTokenController} = require('../controllers')

const refreshRouter = Router()

module.exports = refreshRouter.post('/refresh',  token.refreshTokenMiddleware, refreshTokenController)
