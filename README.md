# <%= name %>

> A static website powered by [React.js](http://facebook.github.io/react/)
> and [Webpack](http://webpack.github.io/).

**Note**: *This project is based on [react-static-boilerplate](https://github.com/koistya/react-static-boilerplate).*

### Features

&nbsp; &nbsp; ✓ Generates static `.html` pages from [React](http://facebook.github.io/react/) components<br>
&nbsp; &nbsp; ✓ Generates routes based on the list of files in the `/src` folder<br>
&nbsp; &nbsp; ✓ Next generation JavaScript with [Babel](https://github.com/babel/babel)<br>
&nbsp; &nbsp; ✓ Next generation CSS with [postCSS](https://github.com/postcss/postcss) and [cssnext](http://cssnext.io/)<br>
&nbsp; &nbsp; ✓ Development web server with [React Hot Loader](http://gaearon.github.io/react-hot-loader/)<br>
&nbsp; &nbsp; ✓ Bundling and optimization with [Webpack](http://webpack.github.io/)<br>
&nbsp; &nbsp; ✓ [Code-splitting](https://github.com/webpack/docs/wiki/code-splitting) and async chunk loading<br>
&nbsp; &nbsp; ✓ Easy deployment to [GitHub Pages](https://pages.github.com/) or [Amazon S3](http://davidwalsh.name/hosting-website-amazon-s3)<br>

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # React.js-based web pages
│   ├── /blog/                  # Blog post entries example
│   ├── /img/                   # Website images
│   ├── /js/                    # JavaScript code and React.js components
│   ├── /404.js                 # 'Not found' page
│   ├── /about.js               # 'About' page
│   └── /index.js               # 'Home' page
├── /test/                      # Unit tests
├── /tools/                     # Build automation scripts
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
$ npm run build -- --release    # Builds the project in release mode
$ npm run deploy                # Deploys the project to GitHub Pages
```

### Related Projects

 * [React Starter Kit](https://github.com/kriasoft/react-starter-kit)
 * [React Routing](https://github.com/kriasoft/react-routing)
 * [React Decorators](https://github.com/kriasoft/react-decorators)

### Learn More

 * [Getting Started with React.js](http://facebook.github.io/react/)
 * [React.js Wiki on GitHub](https://github.com/facebook/react/wiki)
 * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
 * [React.js Discussion Board](https://discuss.reactjs.org/)
 * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)

---
Copyright (c) <%= author %>.&nbsp; All rights reserved.
