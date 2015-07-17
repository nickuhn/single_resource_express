var express = require('express');
var mongoose = require('mongoose');
var app = express();

var restaurantRoutes = express.Router();

require('./routes/restaurantRoutes')(restaurantRoutes);

app.use('/api', restaurantRoutes);

app.listen(process.env.PORT || 3000, function() {
  console.log('Up and running');
});
