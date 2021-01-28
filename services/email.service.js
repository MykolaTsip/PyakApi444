const mailer = require('nodemailer')
const EmailTemplates = require('email-templates')
const path = require('path')
const chalk = require('chalk')

const {CONSTANTS} = require('../configs')
const htmlTemplate = require('../email-templates')


const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
})

// console.log(CONSTANTS.EMAIL_NAME +'\n'+ CONSTANTS.EMAIL_PASS)

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: CONSTANTS.EMAIL_NAME,
        pass: CONSTANTS.EMAIL_PASS
    }
})

// user: 'ottonewslettersite@gmail.com',
//     pass: 'jhpqtgqmnrcypuxj'

class EmailService {
    async sendMailer(userEmail, action, context) {
        try {
            const templateInfo = htmlTemplate[action]
            const html = await emailTemplates.render(templateInfo.templateFileName, {
                ...context
            })

            const mailOptions = {
                from: 'Pyak team',
                to: userEmail,
                subject: templateInfo.subject,
                html
            }

            return transporter.sendMail(mailOptions)
        }
         catch (e) {
            console.log(chalk.gray(e))
        }
    }
}

module.exports = new EmailService()
