const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map none',
 
  output: {
   
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
    
  },
  module: {
    rules: [
      
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "imgs"
        }
      }

    },


    ]
  },
  plugins: [new MiniCssExtractPlugin({
    
    filename: '[name].css',
    chunkFilename: '[id].css',
  })],

});