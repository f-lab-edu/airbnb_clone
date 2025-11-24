export const MovieListEmpty = () => {
  return (
    <div className="text-center py-16 lg:py-24">
      <div className="text-6xl mb-4">🎬</div>
      <p className="text-lg lg:text-xl text-gray-300 font-medium">
        표시할 영화가 없습니다.
      </p>
      <p className="text-sm lg:text-base text-gray-500 mt-2">
        다른 탭을 선택해보세요.
      </p>
    </div>
  );
};
