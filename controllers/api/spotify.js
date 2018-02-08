var credit = require('../../models/credit');
var request = require('request');
const rootURL = 'https://api.spotify.com/v1/';
const spotifyApi = require('./../../config/token');

function getSpotify(req, res) {
    spotifyApi.clientCredentialsGrant()
        .then(function (data) {
            spotifyApi.setAccessToken(data.body['access_token']);
            var options = {
                url: `${rootURL}search?q=${req.body.name}&type=artist`,
                headers: {
                    'Authorization': `Bearer ${data.body['access_token']}`
                }
            };
            request(options, function (err, response, body) {
                var artistData = JSON.parse(body);
                // res.render('credits/index', { artistData, user: req.user });
                res.json(artistData)
                // console.log(artistData.artists.items)
            });

        })
        .catch(function (err) {
        })
}

<<<<<<< HEAD

=======
function convertToObj(req, res) {
    var obj = {};
    for (var idx = 0; idx < artistData.artists.items.length; idx++) {
        obj[artistData.artists.items[idx]] = null;
    }
    console.log(obj);
    res.status(200).json(obj);
};
>>>>>>> master

module.exports = {
    getSpotify,
    convertToObj
}