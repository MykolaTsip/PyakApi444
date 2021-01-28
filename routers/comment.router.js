const {Router} = require('express')

const {commentController} = require('../controllers')

const commentRouter = Router()

commentRouter.get('/all', commentController.AllComment)

module.exports = commentRouter
