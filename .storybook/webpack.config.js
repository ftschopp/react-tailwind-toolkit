// .storybook/webpack.config.js

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 1000000,
              name: `statics/images/[name].[ext]`,
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: `statics/fonts/[name].[ext]`,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    modules: [resolve('../node_modules')],
    alias: {
      components: resolve('../src/components'),
      views: resolve('../src/views'),
      statics: resolve('../src/statics'),
    },
  },
};
