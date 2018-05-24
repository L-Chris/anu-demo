const webpack = require('webpack'),
  path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  TransferWebpackPlugin = require('transfer-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  entry: {
    index: './src/index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }],
    postLoaders: [{
      test: /\.js$/,
      loader: "es3ify-loader"
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      inject: true
    }),
    new TransferWebpackPlugin([
      { from: 'services/polyfill', to: '/js' }
    ], path.join(__dirname, 'src')),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        properties: false,
        warnings: false
      },
      output: {
        beautify: true,
        quote_keys: true
      },
      mangle: {
        screw_ie8: false
      },
      sourceMap: false
    })
  ],
  resolve: {
    alias: {
      react: "anujs/dist/ReactIE.js",
      "react-dom": "anujs/dist/ReactIE.js",
      '@': resolve('src')
    }
  }
}