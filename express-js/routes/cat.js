const express = require('express');
const router = express.Router();
const catService = require('../services/cat.service');

const validationHandler = next => result => {
  if (result.isEmpty()) return
  if (!next)
    throw new Error(
      result.array().map(i => `'${i.param}' has ${i.msg}`).join(' ')
    )
else
  return next(
    new Error(
      result.array().map(i => `'${i.param}' has ${i.msg}`).join('')
    )
  )
}

router.get('/', (req, res, next) => {
  catService
    .findAll()
      .then((cats) => {
        res.json(cats);
      });
});

router.get('/:id', (req, res, next) => {
  catService
    .findOne(req.params.id)
      .then((cat) => {
        res.json(cat);
      });
});

router.post('/', catService.validateCreate(), (req, res, next) => {
  req
    .getValidationResult()
    .then(validationHandler())
    .then(() => {
      catService
      .create(req.body)
        .then((cat) => res.json(cat));
    })
    .catch(next);
});



module.exports = router;
