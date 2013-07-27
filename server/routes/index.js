var fs = require('fs');
var _ = require('underscore');


exports.index = function (req, res) {

  var data = {
    title : 'Scaffolding NodeJS'
  };
  res.render('index', data);
};