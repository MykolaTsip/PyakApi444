const {CommentModel} = require("../database/model");

module.exports = {
    allComment: () => {
           return CommentModel.findAll({})
    }
}
