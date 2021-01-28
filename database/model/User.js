const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../index');

class User extends Model {
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        onDelete: 'CASCADE'
    },

    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },

    activate: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },

    photo: {
        type: DataTypes.STRING
    },

}, { sequelize });
//
// const Drop = require('./Drop');
//
// User.belongsTo(Drop, { foreignKey: 'the_best_drop', as: modelAllies.theBestDrop });

module.exports = User;
