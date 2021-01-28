const jwt = require('jsonwebtoken')
const chalk = require('chalk')

const {tokenConf} = require("../../configs");
const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../../errors')
const {tokens} = require('../../services')

module.exports = async (req, res, next) => {

        let {token} = req.params

        if (!token) {
            return next(
                new ErrorHandle(
                    ErrorEnum.NOT_FOUND.message,
                    ErrorStatusEnum.NOT_FOUND,
                    ErrorEnum.NOT_FOUND.customCode
                )
            )
        }

        jwt.verify(token, tokenConf.EMAIL_TOKEN, err => {
            if(err) {
                return next( new ErrorHandle(
                    ErrorEnum.BAD_REQUEST_NO_TOKEN.message,
                    ErrorStatusEnum.UNAUTHORIZED,
                    ErrorEnum.BAD_REQUEST_NO_TOKEN.customCode
                ))
            }
        })

        const isToken = await tokens.tokenActivateAccount.getTokenByParams({token})

        if (!isToken) {
            return next(
                new ErrorHandle(
                    ErrorEnum.BAD_REQUEST_NO_TOKEN.message,
                    ErrorStatusEnum.UNAUTHORIZED,
                    ErrorEnum.BAD_REQUEST_NO_TOKEN.customCode
                )
            )
        }


        req.user_id = isToken.user_id;

        next()

}
