
const {zakladService} = require('../../services')
const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../../errors')

module.exports = async (req, res, next) => {

const {location} = req.body



 let local = await zakladService.getZakladByParams({location})


    if (local) {
        return next(
            new ErrorHandle(
                ErrorEnum.BAD_REQUEST_ZAKLAD_REGISTER.message,
                ErrorStatusEnum.CONFLICT,
                ErrorEnum.BAD_REQUEST_ZAKLAD_REGISTER.customCode
            )
        )
    }


    next()
}
