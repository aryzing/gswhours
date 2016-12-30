var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/client',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?camelCase&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: __dirname + '/src'
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
