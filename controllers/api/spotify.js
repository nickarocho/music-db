var credit = require('../../models/credit');
var request = require('request');
const rootURL = 'https://api.spotify.com/v1/';
const spotifyApi = require('./../../config/token');
var convertToObj = require('./../../utils/convertToObj');

function getSpotify(req, res) {
    spotifyApi.clientCredentialsGrant()
        .then(function (data) {
            if (req.body.name !== '') {
                spotifyApi.setAccessToken(data.body['access_token']);
                var options = {
                    url: `${rootURL}search?q=${req.body.name}&type=artist`,
                    headers: {
                        'Authorization': `Bearer ${data.body['access_token']}`
                    }
                };
                request(options, function (err, response, body) {
                    var artistData = JSON.parse(body);
                    console.log('the body is:' + body);
                    console.log('the error is:' + err);
                    console.log(convertToObj(artistData.artists.items))
                    res.json(convertToObj(artistData.artists.items, true));
                });
            }
        })
        .catch(function (err) {
        })
}

module.exports = {
    getSpotify
}