const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const utils = require("./utils");

const exposedAs = utils.getExposedNameFromConfig();

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build", "client"),
    library: exposedAs,
    libraryTarget: "umd",
    publicPath: "http://localhost:8080/",
  },
  devtool: "inline-source-map",
  devServer: {
    https: false,
    hot: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  },
  externals: ["react", "antd", "moment"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
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
    new ManifestPlugin(),
    new WriteFilePlugin(),
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
  ],
};
