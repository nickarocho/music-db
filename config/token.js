var SpotifyApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyApi({
    clientId: process.env.SPOTIFY_APP_ID,
    clientSecret: process.env.SPOTIFY_APP_SECRET
});

module.exports = spotifyApi;


