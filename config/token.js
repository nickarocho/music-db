var SpotifyApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyApi({
    clientId: 'c5008fa146a14d4f982ccd5ad9d6c181',
    clientSecret: 'b7c813950418460288171de1be13a8b9'
});

spotifyApi.clientCredentialsGrant()
    .then(function(data) {
        console.log(data.body['access_token']);
        spotifyApi.setAccessToken(data.body['access_token']);
    }, function(err) {
        console.log('Error!', err);
    });