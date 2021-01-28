const {Op} = require('sequelize')
const dayjs = require('dayjs')

const {tokens} = require('../services')


module.exports = async () => {
    await tokens.oauth.deleteTokenByParams({
        createdAt: {
            [Op.lte]: dayjs.subtract(15, 'day').format('YYYY-MM-DD hh:mm:ss')
        }
    })
}
