var express = require('express');
var router = express.Router();
var Spotify = require('node-spotify-api');
var cors = require('cors')

var spotify = new Spotify({
  id: '9c9135239251432b80c28a29a3f44268',
  secret: '1832b6d598f54be58f4f9d258c9fc40f'
});

/* GET users listing. */
router.get('/artists', cors(), function(req, res, next) {
  spotify.search({ type: 'artist', query: req.query.query }).then(function(response) {
    res.json(response);
  }).catch(function(err) {
    res.sendStatus(404);
  });
});

router.get('/albums/:artist_id', cors(), function(req, res, next) {
  spotify.request(`https://api.spotify.com/v1/artists/${req.params.artist_id}/albums`).then(function(response) {
    res.json(response);
  }).catch(function(err) {
    res.send(err);
  });
});

router.get('/tracks/:album_id', cors(), function(req, res, next) {
  spotify.request(`https://api.spotify.com/v1/albums/${req.params.album_id}/tracks`).then(function(response) {
    res.json(response);
  }).catch(function(err) {
    res.send(err);
  });
});

module.exports = router;
