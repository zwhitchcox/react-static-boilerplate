# <%= name %>

> A static website powered by [React.js](http://facebook.github.io/react/)
> and [Webpack](http://webpack.github.io/).

**Note**: *This project is based on [react-static-boilerplate](https://github.com/koistya/react-static-boilerplate).*

### Features

&nbsp; &nbsp; ✓ Generates static `.html` pages from [React](http://facebook.github.io/react/) components<br>
&nbsp; &nbsp; ✓ Generates routes based on the list of files in the `/pages` folder<br>
&nbsp; &nbsp; ✓ Next generation JavaScript with [Babel](https://github.com/babel/babel)<br>
&nbsp; &nbsp; ✓ Next generation CSS with [postCSS](https://github.com/postcss/postcss) and [cssnext](http://cssnext.io/)<br>
&nbsp; &nbsp; ✓ Development web server with [React Hot Loader](http://gaearon.github.io/react-hot-loader/) and [BrowserSync](http://www.browsersync.io)<br>
&nbsp; &nbsp; ✓ Bundling and optimization with [Webpack](http://webpack.github.io/)<br>
&nbsp; &nbsp; ✓ [Code-splitting](https://github.com/webpack/docs/wiki/code-splitting) and async chunk loading<br>
&nbsp; &nbsp; ✓ Easy deployment to [GitHub Pages](https://pages.github.com/) or [Amazon S3](http://davidwalsh.name/hosting-website-amazon-s3)<br>
&nbsp; &nbsp; ✓ [Yeoman](http://yeoman.io/) generator ([generator-react-static](https://www.npmjs.com/package/generator-react-static))<br>

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /components/                # React components
├── /lib/                       # Libraries and utilities
├── /pages/                     # React.js-based web pages
│   ├── /blog/                  # Blog post entries example
│   ├── /404.js                 # Not Found page
│   ├── /500.js                 # Error page
│   ├── /about.js               # About Us page
│   └── /index.js               # Home page
├── /static/                    # Static files such as favicon.ico etc.
├── /test/                      # Unit and integration tests
├── /tools/                     # Build automation scripts and utilities
│── app.js                      # The main JavaScript file (entry point)
│── config.js                   # Website configuration / settings
│── LICENSE.txt                 # License file
│── package.json                # Dev dependencies and NPM scripts
└── README.md                   # Project overview
```

### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```
$ npm test
```

### How to Deploy

```shell
$ npm run deploy                # Deploys the project to GitHub Pages
```

### Related Projects

  * [React Starter Kit](https://github.com/kriasoft/react-starter-kit)
  * [React Routing](https://github.com/kriasoft/react-routing)
  * [React Decorators](https://github.com/kriasoft/react-decorators)

### Learn More

  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [Getting Started with GraphQL and Relay](https://quip.com/oLxzA1gTsJsE)
  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js Discussion Board](https://discuss.reactjs.org/)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)

---
Copyright (c) <%= author %>.&nbsp; All rights reserved.
