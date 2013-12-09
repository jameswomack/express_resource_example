express = require('express');
require('express-resource');
app = global.app = express();

controllify = require('./lib/controllify');
controllersFolderPath = __dirname + '/app/controllers/';
controllify.setup(controllersFolderPath);

app.use(express.bodyParser());
app.listen(3000);
