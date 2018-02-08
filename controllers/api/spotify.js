var credit = require('../../models/credit');
var request = require('request');
const rootURL = 'https://api.spotify.com/v1/';
const spotifyApi = require('./../../config/token');

function getSpotify(req, res) {
    spotifyApi.clientCredentialsGrant()
        .then(function (data) {
            spotifyApi.setAccessToken(data.body['access_token']);
            console.log(req.body);
            
            var options = {
                url: `${rootURL}search?q=${req.body.name}&type=artist`,
                headers: {
                    'Authorization': `Bearer ${data.body['access_token']}`
                }
            };
            request(options, function (err, response, body) {
                var artistData = JSON.parse(body);
                res.render('users/search-results', { artistData, user: req.user });
                console.log(artistData)
            });

        })
        .catch(function (err) {
        })
}

module.exports = {
    getSpotify
}