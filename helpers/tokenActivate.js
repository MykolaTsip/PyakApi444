const jwt = require('jsonwebtoken')

const {tokenConf} = require('../configs')

module.exports = () => jwt.sign({}, tokenConf.EMAIL_TOKEN, {expiresIn: '1d'});
