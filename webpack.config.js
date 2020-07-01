// avoid error of / o \
const path = require("path");
//extract html
const HTMLWebpackPlugin = require("html-webpack-plugin");
// extract css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    app: ["./src/app/index.js"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "js/bundle.js",
  },
  devServer: {
    port: 4500,
  },
  // with this is not neccesary import * ./mycomponent.js just ./mycomponent
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        use: [
          {
            loader: "babel-loader",
            query: {
              compact: true,
            },
          },
        ],
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: "/node_modules/",
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/app.bundle.css",
    }),
  ],
};
