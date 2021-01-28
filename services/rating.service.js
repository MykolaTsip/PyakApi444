
const {RatingModel} = require('../database/model')


module.exports = {

    allRAting: () => {
        return RatingModel.findAll({})
    }
}
