const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../../errors')

const {userService} = require('../../services')

module.exports = async (req, res ,next) => {
    const {email} = req.body

    if (!email) {
        return next(
            new ErrorHandle(
                ErrorEnum.BAD_INVALID_USER_REGISTERED.message,
                ErrorStatusEnum.UNAUTHORIZED,
                ErrorEnum.BAD_INVALID_USER_REGISTERED.customCode
            )
        )
    }

    const dbUser = await userService.getOneUserByParams({email})

    if (dbUser) {
        return next(
            new ErrorHandle(
                ErrorEnum.BAD_INVALID_USER_REGISTERED.message,
                ErrorStatusEnum.UNAUTHORIZED,
                ErrorEnum.BAD_INVALID_USER_REGISTERED.customCode
            )
        )
    }

    next()
}
