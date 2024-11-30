import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: options.paths.html,
    });

    const progressPlugin = new webpack.ProgressPlugin();

    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    });

    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(options.isDev),
    });

    const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({ openAnalyzer: false });

    const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

    if (options.isDev) {
        return [
            htmlWebpackPlugin,
            progressPlugin,
            miniCssExtractPlugin,
            definePlugin,
            hotModuleReplacementPlugin,
            bundleAnalyzerPlugin,
        ];
    }

    return [
        htmlWebpackPlugin,
        progressPlugin,
        miniCssExtractPlugin,
        definePlugin,
    ];
};
