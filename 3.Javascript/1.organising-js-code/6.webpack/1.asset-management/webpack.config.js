const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // Shows Original Source Code in browser
  devtool: 'inline-source-map',
  // Reloads server on source file change - run 'npx webpack'
  devServer: {
    contentBase: './dist',
    hot: true
  }
};