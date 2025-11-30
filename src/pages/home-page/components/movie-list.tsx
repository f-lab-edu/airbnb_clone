import { type Movie, type MovieType } from "@domains/movies/type";
import { format } from "date-fns";
import { useNavigate } from "react-router";
import { useMovieList } from "../use-movie-list";
import { MovieListError } from "./movie-list-error";
import { MovieListLoading } from "./movie-list-loading";

type MovieListProps = {
  activeTab: MovieType;
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
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
  const navigate = useNavigate();

  const goDetailPage = () => {
    navigate(`/contents/${movie.id}`);
  };

  return (
    <div className="group cursor-pointer" onClick={goDetailPage}>
      <div className=" overflow-hidden rounded-lg bg-[#1a1a1a] mb-2 relative">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 text-white text-xs font-medium">
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 fill-[#FF0558]" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
      <div className="px-1">
        <h3 className="font-medium text-sm text-white line-clamp-2 leading-tight group-hover:text-[#FF0558] transition-colors duration-200">
          {movie.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          {format(new Date(movie.release_date), "yyyy")}
        </p>
      </div>
    </div>
  );
};
