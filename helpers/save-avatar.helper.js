const uuid = require('uuid').v4()
const fs = require('fs')
const path = require('path')

module.exports = async (email, avatar) => {
        const dirName = `/userPhoto/${email}`
        const fileException = avatar.name.split('.').pop()
        const photoName = `${uuid}.${fileException}`

        fs.mkdir(path.join(process.cwd(), 'public', dirName), {recursive: true}, err => {
            if (err) {
                console.log(err)
            }
        })

        let photo = `${dirName}/${photoName}`

        await avatar.mv(path.join(process.cwd(), 'public', dirName, photoName))

    return  photo;
}
