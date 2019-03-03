module.exports = (req, res) => {
    const params = req.params;
    res.send({ params });
};