const Sequelize = require('sequelize');
const sequelize = require('../connection');

const Cat = sequelize.define('cat', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    color: {
        type: Sequelize.STRING
    }
},
{ });

Cat.sync({ force: true })
    .then(() => {
        return Cat.create({
            name: 'Peter',
            age: 10,
            color: 'Orange'
        })
    });

module.exports = Cat;