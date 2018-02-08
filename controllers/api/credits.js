var Credit = require('../../models/credit')

function getCredits(req, res) {
    Credit.schema.path('instrument').enumValues;
    res.status(200).json(Credit.schema.path('instrument').enumValues);
};

module.exports = {
    getCredits
}