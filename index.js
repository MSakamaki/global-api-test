var express = require('express');
var app = express();
//var bodyParser = require('body-parser')
var server = require('http').createServer(app);
var port = process.env.PORT || 8001;

//app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.urlencoded({extended: true, limit: '50mb' }));

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Start server
server.listen(port,process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined
  , function () {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

// すべてのデータを取得
app.get('/api/200', function (req, res) {
  res.status(200).json({"hello": "world"});
});
app.get('/api/401', function (req, res) {
  res.status(401).send('e');
});
app.get('/api/404', function (req, res) {
  res.status(404).send('e');
});
app.get('/api/500', function (req, res) {
  res.status(500).send('e');
});