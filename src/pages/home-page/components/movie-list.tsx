import { format } from "date-fns";
import { TabType, type Movie } from "../type";
import { useMovieList } from "../use-movie-list";
import { MovieListError } from "./movie-list-error";
import { MovieListLoading } from "./movie-list-loading";

type MovieListProps = {
  activeTab: TabType;
};

export const MovieList = ({ activeTab }: MovieListProps) => {
  const { movies, loading, error } = useMovieList(activeTab);

  if (loading) {
    return <MovieListLoading />;
  }

  if (error) {
    return <MovieListError error={error} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

type MovieItemProps = {
  movie: Movie;
};

const getImageUrl = (posterPath: string | null) => {
  if (!posterPath) {
    return "https://via.placeholder.com/300x450?text=No+Image";
  }
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};

const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
          <span>{format(new Date(movie.release_date), "yyyy")}</span>
          <span className="flex items-center">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};
