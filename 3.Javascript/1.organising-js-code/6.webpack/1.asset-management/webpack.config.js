const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Shows Original Source Code in browser
  devtool: 'inline-source-map',
  // Reloads server on source file change - run 'npx webpack'
  devServer: {
    contentBase: './dist',
    hot: true
  }
};