const Cat = require('../models/cat.model')
const { body } = require('express-validator/check')

module.exports = {
    findAll: async () => {
        return await Cat.findAll();
    },
    findOne: async (id) => {
        return await Cat.findById(id);
    },
    create: async (createCatDto) => {
        return await Cat.create(createCatDto);
    },
    validateCreate: () => {
        return [
            body('name', 'Must provide name').exists().not().isEmpty(),
            body('age', 'age must be a number').isInt(),
            body('color', 'must be a valid color').isIn(['Orange', 'Grey', 'Black', 'White'])
        ];
    }
}