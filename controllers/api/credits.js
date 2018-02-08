var Credit = require('../../models/credit')
var convertToObj = require('./../../utils/convertToObj');

function getCredits(req, res) {
    res.status(200).json(convertToObj(Credit.schema.path('instrument').enumValues))
};

module.exports = {
    getCredits
}