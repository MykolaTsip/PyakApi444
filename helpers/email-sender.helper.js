const {emailEnum} = require("../configs");
const {emailService} = require("../services");
const {constantRouters} = require('../configs')

module.exports = async (email, lastName, firstName, token) => {
    await emailService.sendMailer(email, emailEnum.CONFIRMATION, {
        userName: `${lastName}  ${firstName}`,
        symb: constantRouters.routerUsers+`${token}`
    })
}
