// GET: http://localhost:3000/images/:image/foo
exports.foo = {};
exports.foo.get = function(req, res) {
  res.send('You went to foo');
}

// GET: http://localhost:3000/images
exports.index = function(req, res){
  res.send('image index');
};

// POST: http://localhost:3000/images
exports.create = function(req, res){
  res.send('create image');
};

// GET: http://localhost:3000/images/:image
exports.show = function(req, res){
  res.send('show image ' + req.params.image);
};

// PUT: http://localhost:3000/images:image
exports.update = function(req, res){
  res.send('update image ' + req.params.image);
};

// DELETE: http://localhost:3000/images/:image
exports.destroy = function(req, res){
  res.send('destroy image ' + req.params.image);
};

