// const chalk = require('chalk')

const {UserModel, RatingModel, ZakladModel, OauthModel, CommentModel, NewspaperModel, FavoriteZakladModel, PyachokModel} = require("../database/model");

module.exports = {

    allUsers: () => {
      return UserModel.findAll({})
    },

    getOneUserByParams: (params) => {
        return UserModel.findOne({
            where: params
        })
    },

    createUser:  (userObj) => {
            return UserModel.create(userObj)
    },

    updateUserByParams: (params, options) => {

        return UserModel.update(params, {
            where: options
        })
    },

    deleteUser: (params) => {
        return UserModel.destroy({
            where: params
        })
    },



    getAllRatingById: (id) => {
        return
    },

    getUserZakladByParams: (params) => {
        return ZakladModel.findAll({
            where: params
        },
            )
    }
}
