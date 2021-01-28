const {Router} = require('express')

const {ratingController} = require('../controllers')

const ratingRouter = Router()

ratingRouter.get('/all', ratingController.AllRating)

module.exports = ratingRouter

