const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js", // main.js
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"], // 개발: style-loader
      },
    ],
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "dist"),
        // publicPath: "/", // "/" 기본값 dist 폴더를 루트로 접근
      },
      {
        directory: path.join(__dirname, "public"), // public 폴더를 루트로 접근
      },
    ],
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
    client: {
      overlay: true,
    },
  },
  plugins: [
    new Dotenv({
      path: "./.env.development", // 개발 환경 변수 파일
    }),
  ],
});
