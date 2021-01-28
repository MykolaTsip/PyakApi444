const {Model, DataTypes} = require('sequelize')

const {sequelize} = require('../index')

class Rating extends Model {
}

Rating.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
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

// Rating.belongsTo(User, {foreignKey: 'user_id', onDelete: 'CASCADE', hooks: true})
// Rating.belongsTo(Zaklad, {foreignKey: 'zaklad_id', onDelete: 'CASCADE', hooks: true})

module.exports = Rating
