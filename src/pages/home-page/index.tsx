import { useState } from "react";
import { TabType } from "./type";
import { useMovieList } from "./use-movie-list";

const tabs: { id: TabType; label: string }[] = [
  { id: "now_playing", label: "Now Playing" },
  { id: "popular", label: "Popular" },
  { id: "top_rated", label: "Top Rated" },
  { id: "upcoming", label: "Upcoming" },
];

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("now_playing");
  const { movies, loading, error } = useMovieList(activeTab);

  const getImageUrl = (posterPath: string | null) => {
    if (!posterPath) {
      return "https://via.placeholder.com/300x450?text=No+Image";
    }
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">영화 목록</h1>

        {/* 탭 네비게이션 */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  py-4 px-1 border-b-2 font-medium text-sm transition-colors
                  ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* 로딩 상태 */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-600">로딩 중...</p>
          </div>
        )}

        {/* 에러 상태 */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* 영화 리스트 */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={getImageUrl(movie.poster_path)}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-800">
                    {movie.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                    {movie.overview}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(movie.release_date).getFullYear()}</span>
                    <span className="flex items-center">
                      ⭐ {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 영화가 없을 때 */}
        {!loading && !error && movies.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            표시할 영화가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};
