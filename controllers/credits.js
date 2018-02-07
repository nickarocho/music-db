var credit = require('../models/credit');
var request = require('request');
const rootURL = 'https://api.spotify.com/v1/';


function newCredit(req, res) {
    res.render('credits/profile')
}
function show(req, res) {
    res.render('credits/profile')
}

// function searchSpotify(req, res) {
//     var options = {
//         url: `${rootURL}search?q=${req.body.name}&type=artist`,
//         headers: {
//             'Authorization': `Bearer ${process.env.SPOTIFY_TOKEN}`
//         }
//     };
//     request(options, function (err, response, body) {
//         var artistData = JSON.parse(body);
//         console.log(artistData);
//         res.render('users/search-results', {artistData});
//     });
// }


module.exports = {
    new: newCredit,
}