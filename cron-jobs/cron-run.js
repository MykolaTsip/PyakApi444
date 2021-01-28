const cron = require('node-cron')

const deleteOauthToken = require('./delete-oauth-token')
const deleteActivateToken = require('./delete-activate-token-and-user')

module.exports = () => {
    cron.schedule('0 3 */15 * * *', async () => {
       await deleteOauthToken()
    })

    cron.schedule('15 3 */2 * * *', async () => {
      await deleteActivateToken()
    })
}
