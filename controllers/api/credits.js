var Credit = require('../../models/credit')
var convertToObj = require('./../../utils/convertToObj');
var request = require('request');
const rootURL = 'https://api.spotify.com/v1/';
const spotifyApi = require('./../../config/token');

function getCredits(req, res) {
    Credit.find({}, function(err, creds) {
        res.status(200).json(creds);
    });
}

function getInstruments(res, res) {
    res.status(200).json(convertToObj(Credit.schema.path('instrument').enumValues));
}

function createCredit(req, res) {
    var credit = new Credit(req.body);
    credit.save(err => {
        req.user.credits.push(credit._id);
        req.user.save(function(err) {
            req.user.populate('credits', function (err) {
                res.json(req.user);
            });
        });
    });
}

function deleteCredit(req, res) {
    Credit.findByIdAndRemove(req.params.id, function(err, credit) {
        req.user.credits.remove(req.params.id);
        req.user.save()
        res.json({msg: "deleted credit"});
    });
}

module.exports = {
    getCredits,
    createCredit,
    deleteCredit,
    getInstruments
}
