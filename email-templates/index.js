const  {emailEnum} = require('../configs')

module.exports = {
    [emailEnum.CONFIRMATION]: {
        subject: '[CONFIRMATION] account',
        templateFileName: 'account'
    }
}
