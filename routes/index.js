let express = require('express');
let router = express.Router();
let imdb = require('imdb-api')


router.get('/', (req, res) => {
  res.status(200).json({success: true});
});

router.get('/id/:id', (req, res)=>{
  let id = req.params.id;
  imdb.getById(id).then(things =>{
    res.status(200).json(things)
  }).catch(err =>{
    res.status(200).json(err);
  });
});

router.get('/name/:name', (req, res)=>{
  let name = req.params.name;
  imdb.get(name).then(things =>{
    res.status(200).json(things);
  }).catch(err => {
    res.status(200).json(err);
  })
});

module.exports = router;
