karma-chai-sinon
==========

[Sinon-Chai](http://chaijs.com/plugins/sinon-chai) + [Sinon](http://sinonjs.org/) for [Karma](http://karma-runner.github.io)

*What makes this plugin different from `karma-sinon-chai`?*
* It allows you to use either the latest versions of sinon and sinon-chai or the specific versions your project already uses.
* It uses `peerDependencies` only.
* No `bower` dependency.

[![NPM](https://nodei.co/npm/karma-chai-sinon.png?downloads=true)](https://npmjs.org/package/karma-chai-sinon)

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-chai-sinon karma-chai --save-dev
```

Note that karma-chai is a peer dependency, so it must be installed separately.

Add `chai-sinon` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  config.set({

    // frameworks to use
    frameworks: ['mocha', 'chai-sinon', 'chai']

    // ...
```

It should be before `chai`, as Karma loads modules in reverse.

License
-------

The MIT License (MIT)
