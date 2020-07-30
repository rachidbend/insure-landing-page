const path = require('path');
const common = require("./webpack.common");
const  { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsplugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "bundle.[contentHash].js",
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsplugin(), new TerserPlugin()]
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }) ,
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }

});