var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.unshift(pattern(path.join(__dirname, 'adapter.js')));
  files.unshift(pattern(path.resolve(require.resolve('chai-sinon'))));
  files.unshift(pattern(path.resolve(require.resolve('chai'), '../chai.js')));
  files.unshift(pattern(path.resolve(require.resolve('sinon'), '../../pkg/sinon.js')));
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-sinon': ['factory', framework]};
