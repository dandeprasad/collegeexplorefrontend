var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
// var extractPlugin = new MiniCssExtractPlugin({
// 	filename: 'main.css'
// });
 var extractPlugin =  new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    });
var HtmlWebpackPlugin = require("html-webpack-plugin");
 var CleanWebpackPlugin = require("clean-webpack-plugin");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/",
publicPath: "/",
///ReactDev/dist/app
filename: "bundle-[hash].js"
    },
     devServer: {
disableHostCheck: true,
inline: true,
    historyApiFallback: true,
    stats: 'minimal'
  },
		module:{
			rules: [
			        {
			        	test: /\.js$/,
			        	use:[{
			        		loader:'babel-loader',
			        		 options: {
			        		        presets: ['@babel/preset-react','@babel/preset-env']
			        		      }
			        	}

			        	     ]
                    },
                    {
					test: /\.css$/,
					 use:[MiniCssExtractPlugin.loader,'css-loader']

                },
                    	{
					test: /\.scss$/,
					use: [MiniCssExtractPlugin.loader,
					      'css-loader',
				          'sass-loader'
				          ]

                }

                ,
				{
					test:/\.html$/,
					use:['html-loader']
				},
				{
					test: /\.(jpg|png|gif)$/ ,
					use:
						[
						 {
							 loader:'file-loader',
							 options:{
								 name:'[name].[ext]',
								 outputPath:'img/',
								 publicPath:'img/'
							 }
						 }]


				}

			]

        },
        		plugins: [
		          extractPlugin,
		         new HtmlWebpackPlugin({
		        	 template : 'src/index.html'
		         }),
		         new CleanWebpackPlugin(['dist'])
		          ]
};

module.exports = config;
