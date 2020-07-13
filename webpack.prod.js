const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackDynamicPublicPathPlugin = require("webpack-dynamic-public-path");
const utils = require("./utils");

const exposedAs = utils.getExposedNameFromConfig();

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build", "client"),
    library: exposedAs,
    libraryTarget: "umd",
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    publicPath: `{publicPathPlaceHolder}`,
  },
  externals: ["react", "antd", "moment"],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackDynamicPublicPathPlugin({
      externalPublicPath: `window['${exposedAs}_publicPath']`,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "module.yml",
          to: "module.yml",
        },
        {
          from: "package.json",
          to: "package.json",
        },
      ],
    }),
    new ManifestPlugin(),
  ],
};
