const express = require('express');
const router = express.Router();
const catService = require('../services/cat.service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  catService
    .findAll()
      .then((cats) => {
        res.send(cats);
      });
});

module.exports = router;
