const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: 'production',
  output: {
   
    path: path.resolve(__dirname, 'dist'), // this will open index.html file in dist folder by default
    filename: "[name].[contenthash].bundle.js",
    
  },
  module: {
    rules: [
    

     

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
    
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],


});