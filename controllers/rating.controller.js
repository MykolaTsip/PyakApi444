const  {ratingService} = require('../services')


module.exports = {
    AllRating: async (req, res) => {

        const news = await ratingService.allRAting()

        res.json(news)
    }
}
