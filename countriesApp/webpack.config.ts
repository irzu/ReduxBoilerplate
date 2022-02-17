import path from "path";
import webpack, { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import ModuleFederationPlugin from "webpack/lib/container/ModuleFederationPlugin";
import packageJson from "./package.json";


const webpackConfig = (env):Configuration => ({
    entry: "./src/index.tsx",
    devtool: env.production ? 'source-map' : 'eval',
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: "/",
        filename: "static/js/app.[contenthash:8].js",
        chunkFilename: "static/js/app.[contenthash:8].chunk.js",
        globalObject: "this"    
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "url-loader",
                options: {
                    name: "static/media/[name].[hash:8].[ext]",
                },
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack", "url-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "countriesApp",
            remotes: {
                statesApp: 'statesApp'
            },
            shared: {
                "react": { singleton: true, eager: true, requiredVersion: packageJson.dependencies.react },
                "react-dom": { singleton: true, eager: true, requiredVersion: packageJson.dependencies["react-dom"] },
                "react-redux": { singleton: true, eager: true, requiredVersion: packageJson.dependencies["react-redux"] },
                "redux": { singleton: true, eager: true, requiredVersion: packageJson.dependencies.redux },
            },
        }),
        new HtmlWebpackPlugin(
            Object.assign(
                {},
                {
                    title: "Onboarding App",
                    template: "./public/index.html",
                    isProduction: env.production,
                    chunks: ["main"]
                },
                env.production
                    ? {
                        minify: {
                            removeComments: true,
                            collapseWhitespace: true,
                            removeRedundantAttributes: true,
                            useShortDoctype: true,
                            removeEmptyAttributes: true,
                            removeStyleLinkTypeAttributes: true,
                            keepClosingSlash: true,
                            minifyJS: true,
                            minifyCSS: true,
                            minifyURLs: true,
                        },
                    }
                    : undefined
            )
        ),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: "./src/**/*.{ts,tsx,js,jsx}",
            }
        })
    ]
});

export default webpackConfig;
