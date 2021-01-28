const {DataTypes, Model} = require('sequelize')

const {sequelize} = require('../index')

class Pyachok extends Model {
}

Pyachok.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: 'Meeting'
    },

    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    time: {
       type: DataTypes.DATE,
        allowNull: false
    },
    zaklad_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {sequelize})


module.exports = Pyachok
