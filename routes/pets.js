var express = require('express');
var router = express.Router();
const petData = require('../data/pets.json');


router.get('/', function(req, res, next) {
    res.json(petData);
});

// router.put('/:id', function(req, res, next) {
//     res.render('pets', { title: 'Express' });
// });

// router.post('/', function(req, res, next) {
//     res.render('pets', { title: 'Express' });
// });

// router.delete('/:id', function(req, res, next) {
//     res.render('pets', { title: 'Express' });
// });

module.exports = router;