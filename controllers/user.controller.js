const {statues} = require("../configs");
const {userService, tokens} = require('../services')

const {tokinazer, tokenActivateAccount, heshPass, comparePass, saveAvatar, emailSender} = require('../helpers')

module.exports = {

    AllUsers: async (req, res) => {

        const users = await userService.allUsers()

        res.json(users)
    },


    CreateUser: async (req, res) => {
        let {body: {email, lastname, firstname, password}, avatar} = req;
        let photoPath = '';

        password = await heshPass(password)

        if (req.avatar) {
            photoPath = await saveAvatar(email, avatar)
        }

        const activateAccountToken = tokenActivateAccount()

        let createdUser = await userService.createUser({...req.body, photo: photoPath, password})
        await tokens.tokenActivateAccount.createToken({token: activateAccountToken, user_id: createdUser.id})

        await emailSender(email, lastname, firstname, activateAccountToken)

        res.json(statues.OK) // status enum resStatuses.OK // done
    },


    ActivateUser: async (req, res) => {
        const {token} = req.params;
        const id = req.user_id;

        await userService.updateUserByParams({activate: true}, {id});
        await tokens.tokenActivateAccount.deleteTokenByParams({token});

        res.json(statues.OK)
    },


    LoginUser: async (req, res) => {

        const {password} = req.body
        const user = req.user

        await comparePass(password, user.password)

        const token = await tokinazer()

        await tokens.oauth.createToken({
            ...token,
            user_id: user.id
        })

        res.json(token)
    },


    UpdateUser: async (req, res) => {
        let updatedUser
        const {params} = req


        updatedUser = await userService.updateUserByParams({id: +params.id}, req.body)

        console.log(updatedUser)

        res.json(statues.OK)
    },


    DeleteUser: async (req, res) => {

        const {params} = req

        await userService.deleteUser({id: +params.id})

        res.json(statues.OK)
    },


    GetUserZakladById: async (req, res) => {
        let zaklads

        const {id} = req.params

        zaklads = await userService.getUserZakladByParams({user_id: id})

        res.json(zaklads)
    }
}
