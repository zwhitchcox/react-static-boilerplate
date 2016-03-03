/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import cp from './lib/copy';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
function copy() {
  return cp('static', 'build');
}

export default copy;
