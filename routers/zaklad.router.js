const {Router} = require('express')

const {zakladController} = require('../controllers')
const {token, zaklad} = require('../middlewares')


const zakladRouter = Router()


zakladRouter.get('/all', zakladController.AllZaklad)
zakladRouter.post('/create', token.accessTokenMiddleware, zaklad.uniqueLocationZakladMiddleware, zakladController.CreateZaklad)
zakladRouter.put('/update/:id', token.accessTokenMiddleware,  zakladController.UpdateZaklad)
zakladRouter.delete('/delete/:id', token.accessTokenMiddleware,  zakladController.DeleteZaklad)


module.exports = zakladRouter
