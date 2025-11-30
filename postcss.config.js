// PostCSS는 CSS 변환 도구.
// Tailwind는 PostCSS 플러그인

module.exports = {
  plugins: {
    "@tailwindcss/postcss": {}, // Tailwind 클래스를 실제 CSS로 변환
    autoprefixer: {}, // 벤더 프리픽스 추가
  },
};
