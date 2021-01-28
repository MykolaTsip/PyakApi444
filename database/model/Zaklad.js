const {Model, DataTypes} = require('sequelize');

const {sequelize} = require('../index');

class Zaklad extends Model {
}

Zaklad.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false
    },
    workTime: {
        type: DataTypes.STRING,
        defaultValue: 'None stop'
    },
    text: {
        type: DataTypes.STRING,
        allowNull: true
    },
    activate: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },


    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    newspaper_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {sequelize})

// const User = require('./User')
// const Newspaper = require('./Newspaper')
// onUpdate: 'cascade'
// Zaklad.belongsTo(User, {foreignKey: 'user_id', onDelete: 'CASCADE' , hooks: true})
// Zaklad.belongsTo(Newspaper, {foreignKey: 'newspaper_id', onDelete: 'CASCADE', hooks: true})

module.exports = Zaklad
