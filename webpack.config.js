/*
* @Author: 1
* @Date:   2017-04-19 19:36:49
* @Last Modified by:   1
* @Last Modified time: 2017-04-19 20:22:20
*/

'use strict';
const path=require("path");
const htmlplugin=require("html-webpack-plugin")
const obj={
	entry:{
		app:"./src/app.js"
	},
	output:{
		path:path.join(__dirname,"./dist"),
		filename:"bundel.js"
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:"babel-loader",
				query:{
					presets:["es2015"]
				}
			},
			{
				test:/\.vue$/,
				loader:"vue-loader"
			},
			{
				test:/\.css/,
				loader:"style-loader!css-loader"
			},
			{
				test:/\.(eot|ttf|woff|woff2|svg)$/,
				loader:"file-loader?name=[name].[ext]"
			}
		]
	},
	plugins:[
		new htmlplugin({
			template:"./src/index.html"
		})]		
}
module.exports=obj;