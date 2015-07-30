'use strict';

var path = require('path');
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var npmName = require('npm-name');
var chalk = require('chalk');
var yosay = require('yosay');
var glob = require('glob');

module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.props = {};
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    this.sourceRoot(path.join(this.sourceRoot(), '../../react-static-boilerplate'));
  },

  prompting: {
    hello: function () {
      this.log(yosay(
        'Welcome to the primo ' + chalk.green('React Static Website') + ' generator!'
      ));
    },

    askFor: function () {
      var done = this.async();

      var prompts = [{
        name: 'name',
        message: 'Project Name',
        default: path.basename(process.cwd()),
        validate: function (input) {
          return input.length ? true : false;
        }
      }, {
        name: 'author',
        message: 'Author',
        when: !this.pkg.author,
        store: true
      }];

      this.prompt(prompts, function (props) {
        this.props = _.extend(this.props, props);
        done();
      }.bind(this));
    }
  },

  writing: function () {
    var done = this.async();
    glob('**/*', { cwd: this.sourceRoot(), dot: true }, function (err, files) {
      if (err) {
        this.log('Error:', err.message);
        return done();
      }
      files.forEach(function (file) {
        if (file === 'README.md') {
          this.fs.copyTpl(
            this.templatePath(file),
            this.destinationPath(file),
            {
              name: this.props.name,
              author: this.props.author
            }
          )
        } else {
          this.fs.copy(
            this.templatePath(file),
            this.destinationPath(file)
          );
        }
      }, this);
      done();
    }.bind(this));
  },

  install: function () {
    this.npmInstall();
  }

});
