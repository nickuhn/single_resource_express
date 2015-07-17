var bodyParser = require('body-parser');

module.exports = function(router) {
  router.use(bodyParser.json());

  router.get('/restaurants', function(req, res) {
    res.json({msg: 'hi there'});
  });

  router.get('/restaurants/:id', function(req, res) {
    res.json({msg: 'specific restaurant'});
  });

  router.post('/restaurants/', function(req, res) {
    res.json({msg: 'stored restaurant'});
  });

  router.put('/restaurants/:id', function(req, res) {
    res.json({msg: 'updated restaurant'});
  });

  router.delete('/restaurants/:id', function(req, res) {
    res.json({msg: 'delete restaurant'});
  })
}
