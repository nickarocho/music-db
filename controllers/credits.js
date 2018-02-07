var credit = require('../models/credit');
var request = require('request');
const rootURL = 'https://api.spotify.com/v1/';


function newCredit(req, res) {
    res.render('credits/profile')
}
function show(req, res) {
    res.render('credits/profile')
}



module.exports = {
    new: newCredit,
}