'use strict';

var path = require('path');
var mockery = require('mockery');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('javascript:app', function () {

  before(function () {
    mockery.enable({ warnOnUnregistered: false });
    mockery.registerMock('npm-name', function (name, cb) {
      cb(true);
    });
  });

  after(function () {
    mockery.disable();
  });

  context('running on new project', function () {

    before (function (done) {
      this.answers = {
        name: 'Awesome Project',
        author: 'Konstantin Tarkus (@koistya)',
        skipInstall: true
      };
      helpers.run(path.join(__dirname, '../app'))
        .withOptions(this.answers)
        .on('end', done);
    });

    it('creates files', function () {
      assert.file([
        '.babelrc',
        '.editorconfig',
        '.eslintrc',
        'package.json',
        'README.md'
      ]);
    });

  });

});
