import { Movie } from "@domains/movies";
import { format } from "date-fns";
import { useNavigate } from "react-router";

type SearchResultItemProps = {
  movie: Movie;
};

const getImageUrl = (posterPath: string | null) => {
  if (!posterPath) {
    return "https://via.placeholder.com/300x450?text=No+Image";
  }
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};

export const SearchResultItem = ({ movie }: SearchResultItemProps) => {
  const navigate = useNavigate();

  const goDetailPage = () => {
    navigate(`/contents/${movie.id}`);
  };

  return (
    <div
      onClick={goDetailPage}
      className="flex items-center gap-4 p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors cursor-pointer group"
    >
      <div className="shrink-0 w-16 h-24 sm:w-20 sm:h-28 overflow-hidden rounded bg-[#0D0D0D]">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-medium text-base sm:text-lg mb-1 group-hover:text-[#FF0558] transition-colors line-clamp-1">
          {movie.title}
        </h3>
        {movie.overview && (
          <p className="text-gray-400 text-sm line-clamp-2 mb-2">
            {movie.overview}
          </p>
        )}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          {movie.release_date && (
            <span>{format(new Date(movie.release_date), "yyyy")}</span>
          )}
          {movie.vote_average > 0 && (
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3 fill-[#FF0558]" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {movie.vote_average.toFixed(1)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
