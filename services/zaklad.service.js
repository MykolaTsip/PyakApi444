
const {ZakladModel, UserModel} = require('../database/model')

module.exports = {
    allZaklads: () => {
        return ZakladModel.findAll({})
    },

    createZaklad: (zakladObj) => {
      return  ZakladModel.create(zakladObj)
    },

    updateZakladByParams: (params, options) => {
        return ZakladModel.update(params, {
            where: options
        })
    },

    getZakladByParams: (params) => {
        return ZakladModel.findOne({
            where: params
        })
    },

    deleteZakladByParams: (params) => {
        return ZakladModel.destroy(params)
    },

    getZakladById: (id) => ZakladModel.findOne({
        where: {id},
        include: [
            // attributes: ['id', 'name']
            {model: UserModel}
        ]
    })
}
