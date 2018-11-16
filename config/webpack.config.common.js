const { resolve, join } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const IS_DEV = process.env.NODE_ENV !== 'production';

module.exports = {
  target: 'web',
  entry: ['./src/client/index.tsx'],
  output: {
    publicPath: '/',
    path: resolve(__dirname, '..', 'build', 'client'),
    filename: '[name].js',
  },
  module: {
    rules: [
      // Remove this rule to disable automatic linter
      {
        enforce: 'pre',
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      // end of linter rull
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.ts(x?)$/, loader: "awesome-typescript-loader" },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(s?)css$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: { sourceMap: IS_DEV },
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: IS_DEV ? '[path]-[name]_[local]' : '[name]_[local]_[hash:5]', // [hash:base64]
                modules: true,
                sourceMap: IS_DEV,
              },
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: IS_DEV },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [postcssPresetEnv()],
                sourceMap: IS_DEV,
              },
            },
          ],
        }),
      },
      {
        test: /\.(png|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: IS_DEV,
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],
  resolve: {
    modules: ['node_modules', join('src', 'client')],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  stats: {
    assetsSort: '!size',
    children: false,
    chunks: false,
    colors: true,
    entrypoints: false,
    modules: false,
  },
};
