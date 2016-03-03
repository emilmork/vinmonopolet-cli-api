var es = require('elasticsearch');
var esURL = process.env.VINMONOPOLET_ES_URL;

var client = new es.Client({
  host: esURL,
  log: 'debug'
});
  

module.exports.search = function(query) {
    return new Promise((resolve, reject) => {
        if (!query) reject([]);
        client.search(query, function (error, response) {
          if (error) reject(error);
          resolve(response.hits.hits)
        });
    });
}