var config = require('../config');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/patent/:id/code', function(req, res) {
    var db = req.db;
    var id = req.params.id;
    res.send('patent ' + id + ' code ' + config.filepath);
});

router.get('/patent/:id/page', function(req, res) {
    var id = req.params.id;
    res.download(__dirname + '/index.js');
});

module.exports = router;
