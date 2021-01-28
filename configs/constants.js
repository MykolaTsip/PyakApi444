const dotenv = require('dotenv')

dotenv.config({})

module.exports = {
    EMAIL_NAME: process.env.ROOT_EMAIL ,
    EMAIL_PASS: process.env.ROOT_EMAIL_PASSWORD,

    TYPE_ACCOUNT_SUPERADMIN: process.env.TYPE_ACCOUNT_ADMIN,

    TOKINAZER_TYPE_LOGIN: 'login',
    TOKINAZER_TYPE_ACTIVATE: 'activate',

    AUTHORIZATION  : 'Authorization',

    MIMETYPE_PHOTOS: ['image/gif', 'image/jpeg', 'image/png', 'image/webp'],

    BYTE_TO_MB: 1024*1024,

    EMAIL_VALIDITY: ' EMAIL: /^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/'
}
