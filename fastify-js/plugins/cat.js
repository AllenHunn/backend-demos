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

const catService = {
    findAll: async () => {
        return await Cat.findAll();
    },
    findOne: async (id) => {
        return await Cat.findById(id);
    },
    create: async (createCatDto) => {
        return await Cat.create(createCatDto);
    }
};

const fp = require('fastify-plugin');

// If you prefer async/await, use the following
module.exports = fp(async function (fastify, opts) {
    fastify.decorate('catService', catService);
});