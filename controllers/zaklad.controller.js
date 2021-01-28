const {statues} = require('../configs')
const {zakladService} = require('../services')

module.exports = {
    AllZaklad: async (req, res) => {
        const zaklad = await zakladService.allZaklads()

        res.json(zaklad)
    },



    CreateZaklad: async (req, res) => {

        const zakladObj = req.body;

        console.log(zakladObj);
        const zaklad = await zakladService.createZaklad(zakladObj)


        res.json(zaklad)
    },




    UpdateZaklad: async (req, res) => {

        const {body} = req

        await zakladService.updateZakladByParams({id: req.params.id}, {body})

        res(statues.OK)
    },





    DeleteZaklad: async (req, res) => {

        const {id} = req.params

        await zakladService.deleteZakladByParams({user_id: id})

        res.json(statues.OK)
    }
}
