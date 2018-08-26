const express = require('express');
const app = express();
const indexRoutes = require('./routes/index-routes.js')

app.set('view engine', 'ejs');

app.use(indexRoutes);

app.listen(3000, function(req, res){
  console.log('Now listening to port 3000');
});
