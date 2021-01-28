const {CONSTANTS} = require('../../configs')
const {ErrorHandle, ErrorStatusEnum, ErrorEnum} = require('../../errors')

module.exports = (req, res, next) => {
    if (!req.files) {
        next()
    }

    const photos = []
    const files = Object.values(req.files)

    if (!files) {
        next()
    } else {
        for (let i = 0; i < files.length; i++) {
            const {size, mimetype} = files[i]

            if (!CONSTANTS.MIMETYPE_PHOTOS.includes(mimetype)) {
                return next(new ErrorHandle(
                    ErrorEnum.FORBIDDEN_USER_NOT_CONFIRMED.message,
                    ErrorStatusEnum.CONFLICT,
                    ErrorEnum.FORBIDDEN_USER_NOT_CONFIRMED.customCode
                ))
            } else if (size > 4 * CONSTANTS.BYTE_TO_MB) {
                return next(new ErrorHandle(
                    ErrorEnum.FORBIDDEN_USER_NOT_CONFIRMED.message,
                    ErrorStatusEnum.CONFLICT,
                    ErrorEnum.FORBIDDEN_USER_NOT_CONFIRMED.customCode
                ))
            } else {
                photos.push(files[i])
            }
        }
    }

    if (photos.length > 0) {
        req.avatar = photos[0]
    }

    next()
}
