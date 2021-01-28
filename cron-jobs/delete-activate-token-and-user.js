const {Op} = require('sequelize')
const dayjs = require('dayjs')

const {tokens, userService} = require('../services')

module.exports = async () => {
    await tokens.tokenActivateAccount.deleteTokenByParams({
        createdAt: {
            [Op.lte]: dayjs.subtract(25, 'hour').format('YYYY-MM-DD hh:mm:ss')
        }
    })

    await userService.deleteUser({activate: 0})
}
