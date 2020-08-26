const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const WorkboxPlugin = require('workbox-webpack-plugin'); 
const CopyPlugin = require('copy-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  // performance: { hints: false },  // solved from here: https://github.com/webpack/webpack/issues/3486
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

   

    new WorkboxPlugin.GenerateSW({
           // these options encourage the ServiceWorkers to get in there fast
          // and not allow any straggling "old" SWs to hang around
           clientsClaim: true,
           skipWaiting: true
        }),

        new CopyPlugin({
          patterns: [
            { from: './public/manifest', to: 'manifest' }
          ],
        }),

    
  ],


});