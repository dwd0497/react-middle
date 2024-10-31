import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: options.paths.html,
    });

    const progressPlugin = new webpack.ProgressPlugin()

    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
    })

    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(options.isDev),
    });

    const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin()

    return [
        htmlWebpackPlugin,
        progressPlugin,
        miniCssExtractPlugin,
        definePlugin,
        hotModuleReplacementPlugin
    ]
}