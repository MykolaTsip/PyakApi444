const {Model, DataTypes} = require('sequelize')

const {sequelize} = require('../index')

class TokenActivateAccount extends Model{
}

TokenActivateAccount.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: 'cascade'
    }
}, {sequelize})

const User = require('./User')

TokenActivateAccount.belongsTo(User, {foreignKey: 'user_id', onUpdate: 'SET NULL'})

module.exports = TokenActivateAccount
