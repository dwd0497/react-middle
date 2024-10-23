import webpack from "webpack"
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders= ({isDev}: BuildOptions): webpack.RuleSetRule[] => {
    const SvgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }

    const FileLoader = {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {}
            }
        ]
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader =  {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => {
                            return resourcePath.includes(".module.");
                        },
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:5]",
                    },
                }
            },
            "sass-loader",
        ],
    }

    return [
        SvgrLoader,
        FileLoader,
        tsLoader,
        cssLoader
    ]
}