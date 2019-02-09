const Cat = require('../models/cat.model')

module.exports = {
    findAll: async () => {
        return await Cat.findAll();
    }
}