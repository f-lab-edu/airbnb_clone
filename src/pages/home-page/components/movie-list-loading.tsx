export const MovieListLoading = () => {
  return (
    <div className="text-center py-16 lg:py-24">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF0558]"></div>
      <p className="mt-4 text-base lg:text-lg text-gray-400 font-medium">
        로딩 중...
      </p>
    </div>
  );
};
