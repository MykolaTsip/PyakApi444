const chalk = require('chalk')

const { TokenActivateAccountModel } = require('../../database/model')

module.exports = {
    createToken: (data) => TokenActivateAccountModel.create(data),


    getTokenByParams: (params) => {
           return TokenActivateAccountModel.findOne({
               where: params
           })
    },


    deleteTokenByParams: async (params) => {
        await TokenActivateAccountModel.destroy({
            where: params
        })
    }
}
