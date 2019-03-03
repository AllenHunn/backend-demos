const catController = require('../controllers/cat');

module.exports = async (req, res) => {
    res.send(await catController[req.method](req));
};