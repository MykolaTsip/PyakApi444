const {Model, DataTypes} = require('sequelize')

const {sequelize} = require('../index')

class FavoriteZaklad extends Model{
}

FavoriteZaklad.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    zaklad_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {sequelize})

