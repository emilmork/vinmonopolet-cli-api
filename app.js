var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var api = require('./api');

app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/products', function(req, res){
  console.log("/products");
  if (!req.body) res.status(500).json({});

  var query = req.body;
  if (!query) {
    res.json([]);
  }

  api.search(query)
      .then((data) => {
        res.send(data);
      }).catch(err => res.status(500).json(err));
});

console.log("App started listening on port 3000");
app.listen(process.env.PORT || 8081);