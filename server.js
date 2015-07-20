var express = require('express');
var mongoose = require('mongoose');
var app = express();

var restaurantRoutes = express.Router();

var MONGO_URI = (process.env.MONGOLAB_URI || 'mongodb://localhost/restaurants_db');

mongoose.connect(MONGO_URI);

require('./routes/restaurantRoutes')(restaurantRoutes);

app.use('/api', restaurantRoutes);

app.listen(process.env.PORT || 3000, function() {
  console.log('Up and running');
});
