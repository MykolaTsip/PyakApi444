const {Model, DataTypes} = require('sequelize')

const {sequelize} = require('../index')

class Newspaper extends Model{
}

Newspaper.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    activate: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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

// const User = require('./User')
// const Zaklad = require('./Zaklad')
//
// Newspaper.belongsTo(User, {foreignKey: 'user_id'})
// Newspaper.belongsTo(Zaklad, {foreignKey: 'zaklad_id'})

module.exports = Newspaper
