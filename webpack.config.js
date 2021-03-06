const path               = require('path');
const ExtractTextPlugin  = require("extract-text-webpack-plugin");
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const autoprefixer       = require('autoprefixer');
const vr                 = require('postcss-vr');
const focus              = require('postcss-focus');
const pxtorem            = require('postcss-pxtorem');

const PATHS = {
  assets: path.join(__dirname, 'public/assets'),
  build: path.join(__dirname, 'app/public')
};

module.exports = {
  entry: {
    app: PATHS.assets
  },

  output: {
    path: PATHS.build,
    filename: '/js/[name].js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loaders: ['eslint'],
        include: PATHS.assets
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader")
      }
    ]
  },

  plugins: [
      new ExtractTextPlugin("/css/[name].css"),
      new CopyWebpackPlugin([
        {
          from: 'assets/css/_images',
          to: 'css/images'
        }
      ])
  ],

  postcss: [
    autoprefixer,
    vr,
    focus,
    pxtorem
  ]
}
