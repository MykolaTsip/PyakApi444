const {Router} = require('express')

const {newspaperController} = require('../controllers')
const {token} = require('../middlewares')

const newspaperRouter = Router()

newspaperRouter.get('/all', token.accessTokenMiddleware,  newspaperController.AllNews)

module.exports = newspaperRouter
