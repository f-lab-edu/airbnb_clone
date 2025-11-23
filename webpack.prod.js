const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", // 캐싱을 위한 해시 추가
    clean: true, // 빌드 전 dist 폴더 정리
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 운영: CSS 파일로 추출
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // CSS 파일명
    }),
    new Dotenv({
      path: "./.env.production", // 프로덕션 환경 변수 파일
    }),
  ],
});
