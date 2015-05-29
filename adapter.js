(function(window) {
  var pluginConfig = window.__karma__.config.chaiSinon;

  if (pluginConfig && pluginConfig.chaiOptions) {
    Object.keys(pluginConfig.chaiOptions).forEach(function (key) {
      window.chai.config[key] = pluginConfig.chaiOptions[key];
    });
  }

  window.should = null; // Workaround for "RangeError: Maximum call stack size exceeded." in PhantomJS
  window.should = window.chai.should();
  window.expect = window.chai.expect;
  window.assert = window.chai.assert;
})(window);