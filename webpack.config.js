const path = require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")


module.exports = {
  target: 'node',
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'DB_HOST': JSON.stringify(process.env.DB_HOST),
        'DB_USER': JSON.stringify(process.env.DB_USER),
        'DB_PASSWORD': JSON.stringify(process.env.DB_PASSWORD),
        'DB_NAME': JSON.stringify(process.env.DB_NAME)
      }
    }),
    new NodePolyfillPlugin()
  ]
};
