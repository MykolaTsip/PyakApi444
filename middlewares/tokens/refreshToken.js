// const jwt = require('jsonwebtoken')

// const {CONSTANTS, tokenConf} = require('../../configs')
const {ErrorHandle, ErrorStatusEnum, ErrorEnum} = require('../../errors')

// const {tokens} = require('../../services')

module.exports = async (req, res, next) => {

    // const refresh_token = req.get(CONSTANTS.AUTHORIZATION)
    //
    // jwt.verify(refresh_token, tokenConf.REFRESH_TOKEN, err => {
    //     if (err) {
    //         return next(
    //             new ErrorHandle(
    //                 ErrorEnum.UNAUTHORIZED_BAD_TOKEN.message,
    //                 ErrorStatusEnum.UNAUTHORIZED,
    //                 ErrorEnum.UNAUTHORIZED_BAD_TOKEN.customCode
    //             )
    //         )
    //     }
    // })
    //
    // const dbToken = await tokens.oauth.getTokenByParams({refresh_token})
    //
    // if (!dbToken) {
    //     return next(
    //         new ErrorHandle(
    //             ErrorEnum.UNAUTHORIZED_BAD_TOKEN.message,
    //             ErrorStatusEnum.UNAUTHORIZED,
    //             ErrorEnum.UNAUTHORIZED_BAD_TOKEN.customCode
    //         )
    //     )
    // }
    //
    // req.userId = dbToken.user_id

    if (!req.body) {
        return next(new ErrorHandle(
            ErrorEnum.BAD_REQUEST_NO_TOKEN.message,
            ErrorStatusEnum.UNAUTHORIZED,
            ErrorEnum.BAD_REQUEST_NO_TOKEN.customCode
        ))
    }


    next()
}
