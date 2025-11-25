const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./main.tsx", // 웹팩이 읽기 시작할 파일을 .tsx로 변경
  output: {
    path: path.resolve(__dirname, "dist"), // 번들 파일이 어디에 저장될지
    publicPath: "/",
    // filename은 dev/prod에서 각각 설정
  },
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
                ["@babel/preset-react", { runtime: "automatic" }], // JSX를  JSX Transform 형식으로 변환(17+)
                "@babel/preset-typescript", // 타입스크립트를 변환
              ],
            },
          },
        ],
        exclude: /node_modules/, // 외부 모듈은 제외.(이미 빌드 되었음으로 처리하지 않음)
      },
      // CSS rule는 여기서 제외 (dev/prod에서 각각 처리)
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource", // 폰트는 항상 별도 파일로 내보내요
        generator: {
          filename: "assets/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"], // 파일을 import할 때 확장자를 생략할 수 있어요. TypeScript와 JavaScript를 혼용하는 프로젝트에서 설정해두면 좋아요.
    alias: {
      "@lib": path.resolve(__dirname, "src/lib"),
      "@domains": path.resolve(__dirname, "src/domains"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@app": path.resolve(__dirname, "src/app"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // 템플릿 HTML
      filename: "index.html", // 출력될 HTML 파일 이름
      inject: true, // <script> 태그 자동 삽입
    }),
  ],
};
