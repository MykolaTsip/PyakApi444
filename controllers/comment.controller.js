const {commentService} = require('../services')

module.exports = {
    AllComment: async (req, res) => {
        const comments = await commentService.allComment()

        res.json(comments)
    }
}
