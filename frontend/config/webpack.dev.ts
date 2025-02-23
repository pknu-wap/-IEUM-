import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const configuration: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new RefreshWebpackPlugin(),
    {
      apply: (compiler) => {
        compiler.hooks.done.tap('done', (stats) => {
          if (stats.hasErrors()) {
            console.error(
              '❌ Webpack Build Failed! Please check errors above.',
            );
          } else if (stats.hasWarnings()) {
            console.warn('⚠️ Webpack Build Completed with Warnings.');
          } else {
            console.log(`
--------------------------------------------------------
🎉  WEBPACK BUILD SUCCESSFULLY COMPLETED!
✅  Files Generated: ${stats
              .toJson()
              .assets.map((asset) => asset.name)
              .join(', ')}
⏱️  Build Time: ${stats.endTime - stats.startTime} ms
🌐  Server Running at: http://localhost:3000
--------------------------------------------------------
                        `);
          }
        });
      },
    },
  ],
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  stats: {
    all: false,
  },
};

export default merge(common, configuration);
