const dotenv = require('dotenv')

dotenv.config({})

module.exports = {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN_SECRET,
    EMAIL_TOKEN: process.env.EMAIL_TOKEN
}
