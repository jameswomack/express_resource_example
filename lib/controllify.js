inflect = require('i')(true);
fs = require('fs');

exports.setup = function(controllersFolderPath) {
  robustResource = function(subPath) {
    var controllerPath = function(subPath) {
      path = controllersFolderPath + subPath;
      return require(path);
    }

    controller = controllerPath(subPath);
    resource = app.resource(subPath.pluralize, controller);

    defaultMethods = ['index','new','create','show','edit','update','destroy'];

    keys = Object.keys(controller);
    keys.forEach(function(key){
      if (defaultMethods.indexOf(key) === -1) {
        methods = Object.keys(controller[key]);
        methods.forEach(function(method){
          resource.map(method, key, controller[key][method]);
        });
      }
    });
  }

  // Grab all controllers
  files = fs.readdirSync(controllersFolderPath);
  files.forEach(function(file){
    jsExt = '.js';  
    if (file.indexOf(jsExt) === file.length - 3) {
        robustResource(file.split(jsExt)[0]);
      }
  });
}

