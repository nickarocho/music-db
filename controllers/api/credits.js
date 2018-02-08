var Credit = require('../../models/credit')

function getCredits(req, res) {
    var rv = {};
    for (var i = 0; i < Credit.schema.path('instrument').enumValues.length; ++i) {
        rv[Credit.schema.path('instrument').enumValues[i]] = null;
    }
    console.log(rv);
    res.status(200).json(rv);
};



module.exports = {
    getCredits
}