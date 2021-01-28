const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../index');

class Comment extends Model {
}

Comment.init({
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
    },

    text: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, { sequelize });

// const User = require('./User');
// const Zaklad = require('./Zaklad')

// Comment.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE', hooks: true});
// Comment.belongsTo(Zaklad, {foreignKey: 'zaklad_id', onDelete: 'CASCADE', hooks: true}, )

module.exports = Comment;
