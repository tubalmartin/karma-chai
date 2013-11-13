karma-sinon-chai
==========

[Sinon-Chai](http://chaijs.com/plugins/sinon-chai) for [Karma](http://karma-runner.github.io)


Installation
------------

Install the plugin from Github:

```sh
$ npm install 'git://github.com/tubalmartin/karma-sinon-chai.git#0.1.0' --save-dev
```

Add `sinon-chai` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  config.set({

    # frameworks to use
    frameworks: ['mocha', 'sinon-chai']

    # ...
```
