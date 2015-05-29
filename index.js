var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var framework = function(config) {
  if (config.chaiSinon) {
    config.client.chaiSinon = config.chaiSinon;
  }
  config.files.unshift(createPattern(__dirname + '/adapter.js'));
  config.files.unshift(createPattern(path.dirname(require.resolve('sinon-chai')) + '/sinon-chai.js'));
  config.files.unshift(createPattern(path.dirname(require.resolve('chai')) + '/chai.js'));
  config.files.unshift(createPattern(path.dirname(require.resolve('sinon')) + '/../pkg/sinon.js'));
};

module.exports = {'framework:chai-sinon': ['factory', framework]};