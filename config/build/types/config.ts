type Mode = 'development' | 'production'

export type BuildPaths = {
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    port: number;
    mode: Mode;
}

export interface BuildOptions {
    mode: Mode;
    paths: BuildPaths,
    isDev: boolean,
    port: number;
}