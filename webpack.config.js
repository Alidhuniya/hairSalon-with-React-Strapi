const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map none',
  output: {
    // filename: 'main.bundle.js',
    // path: path.resolve(__dirname, 'dist'),

    // path: path.join(__dirname, 'dist'), // this will not open index.html by default
    path: path.resolve(__dirname, 'dist'), // this will open index.html file in dist folder by default
    // publicPath: '/dist/',
    filename: "[name].[contenthash].bundle.js",
    // chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
      },

      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "imgs"
        }
      }

    },
    

    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],

  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },

  devServer: {
    writeToDisk: true // this will show the dist folder in development link: https://github.com/webpack/webpack-dev-server/issues/1141
  }

};