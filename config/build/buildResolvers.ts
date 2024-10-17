import webpack from "webpack"
import {BuildOptions, BuildPaths} from "./types/config";

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {
    return {
        modules: [options.paths.src, 'node_modules'],
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        mainFiles: ["index"],
        alias: {}
    }
}