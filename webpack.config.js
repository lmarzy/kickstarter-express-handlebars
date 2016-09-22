const path              = require('path'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      autoprefixer      = require('autoprefixer'),
      vr                = require('postcss-vr'),
      focus             = require('postcss-focus'),
      pxtorem           = require('postcss-pxtorem');

const PATHS = {
  assets: path.join(__dirname, 'assets'),
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
    loaders: [
      {
        test: /`.js$`/,
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
