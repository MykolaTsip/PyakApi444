const {Router} = require('express')

const {userController} = require('../controllers')

const {users, files, token} = require('../middlewares')

const userRouter = Router()

userRouter.get('/all', token.accessTokenMiddleware, userController.AllUsers)
// todo email checker // done
userRouter.post('/create', users.registUserMiddleware, files.checkUserPhotoAvatarMiddleware, users.uniqueEmailUserMiddleware, userController.CreateUser)
userRouter.get('/:token', users.activateUserMiddleware, userController.ActivateUser)
userRouter.post('/login', users.loginUserMiddleware, userController.LoginUser)
userRouter.put('/update/:id', token.accessTokenMiddleware, userController.UpdateUser)
userRouter.delete('/delete/:id', token.accessTokenMiddleware, userController.DeleteUser)


userRouter.post('/:id/zaklad', token.accessTokenMiddleware, userController.GetUserZakladById)

module.exports = userRouter
