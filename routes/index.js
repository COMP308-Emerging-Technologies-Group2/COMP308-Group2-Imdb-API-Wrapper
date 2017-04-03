let express = require('express');
let router = express.Router();
let imdb = require('imdb-api')

// main route can be used to 
// wake up heroku
router.get('/', (req, res) => {
  res.status(200).json({ success: true });
});

// get movie/tv info by id
router.get('/id/:id', (req, res) => {
  let id = req.params.id;
  imdb.getById(id).then(things => {
    res.status(200).json(things);
  }).catch(err => {
    res.status(400).json(err);
  });
});

// get episodes of of tv show by id 
router.get('/id/:id/episodes', (req, res) => {
  let id = req.params.id;
  imdb.getById(id).then(things => {
    if (things['_episodes']) {
      things.episodes((err, episodes) => {
        if (err) res.status(200).json(err);
        res.status(200).json(episodes);
      }).catch(err => {
        res.status(400).json(err);
      });
    }
  });
});

// get movie/tv info by name
router.get('/name/:name', (req, res) => {
  let name = req.params.name;
  imdb.get(name).then(things => {
    res.status(200).json(things);
  }).catch(err => {
    res.status(400).json(err);
  })
});

module.exports = router;
