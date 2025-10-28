const path = require("path");

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js", // 번들로 만들어질 파일 이름
    path: path.resolve(__dirname, "dist"), // 번들 파일이 어디에 저장될지
  },
  entry: "./main.tsx", // 웹팩이 읽기 시작할 파일을 .tsx로 변경
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .ts와 .tsx 파일을 대상으로
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env", // 최신 JS 문법을 변환
                "@babel/preset-react", // JSX를 변환
                "@babel/preset-typescript", // 타입스크립트를 변환
              ],
            },
          },
        ],
        exclude: /node_modules/, // 외부 모듈은 제외.
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"], // 파일을 import할 때 확장자를 생략할 수 있어요. TypeScript와 JavaScript를 혼용하는 프로젝트에서 설정해두면 좋아요.
  },
};
