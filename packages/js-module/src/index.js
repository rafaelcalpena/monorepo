'use strict';

const path = require('path')

require('./asyncAwait');


require('child_process').spawn(
  path.resolve(__dirname, '../node_modules/nodemon/bin/nodemon.js'),

  [
    '--watch',
    path.resolve(process.cwd(), 'src'),
    '--exec',
    '../node_modules/babel-cli/bin/babel.js ' + path.resolve(process.cwd(), './src'),
    '--out-dir',
    path.resolve(process.cwd(), 'lib') ,'--presets', path.resolve(__dirname,'../node_modules', 'babel-preset-es2015') + ',' +
    path.resolve(__dirname,'../node_modules', 'babel-preset-stage-2') + ',' +
    path.resolve(__dirname,'../node_modules', 'babel-preset-react'),
    '--plugins',
    path.resolve(__dirname,'../node_modules', 'babel-plugin-transform-async-to-generator')
  ],

  {
    stdio: 'inherit',
    cwd: __dirname
  }

)
