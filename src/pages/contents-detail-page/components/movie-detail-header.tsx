import { MovieDetail } from "@domains/movies/type";
import { format } from "date-fns";

type MovieDetailHeaderProps = {
  movie: MovieDetail;
};

const getImageUrl = (path: string | null, size: "w500" | "w1280" = "w500") => {
  if (!path) {
    return null;
  }
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

const formatRuntime = (minutes: number | null) => {
  if (!minutes) return null;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}시간 ${mins}분`;
  }
  return `${mins}분`;
};

export const MovieDetailHeader = ({ movie }: MovieDetailHeaderProps) => {
  const backdropUrl = getImageUrl(movie.backdrop_path, "w1280");
  const posterUrl = getImageUrl(movie.poster_path);

  return (
    <div className="relative">
      {/* Backdrop Image */}
      {backdropUrl && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 from-[#0D0D0D]/0 via-[#0D0D0D]/60 to-[#0D0D0D] z-10" />
          <img
            src={backdropUrl}
            alt={movie.title}
            className="w-full h-[60vh] object-cover"
          />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-32 pb-12">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          {/* Poster */}
          <div className="shrink-0">
            <div className="w-32 sm:w-40 md:w-48 lg:w-56 overflow-hidden rounded-lg bg-[#1a1a1a] shadow-2xl">
              {posterUrl ? (
                <img
                  src={posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-end">
            <div className="space-y-4">
              {/* Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {movie.title}
                </h1>
                {movie.original_title !== movie.title && (
                  <p className="text-gray-400 text-lg">
                    {movie.original_title}
                  </p>
                )}
              </div>

              {/* Tagline */}
              {movie.tagline && (
                <p className="text-gray-300 text-lg italic">
                  &quot;{movie.tagline}&quot;
                </p>
              )}

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                {movie.release_date && (
                  <span>{format(new Date(movie.release_date), "yyyy")}</span>
                )}
                {movie.runtime && <span>{formatRuntime(movie.runtime)}</span>}
                {movie.genres.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {movie.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="px-2 py-1 bg-[#1a1a1a]/80 rounded text-xs"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Rating */}
              {movie.vote_average > 0 && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5 fill-[#FF0558]" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-white font-semibold text-lg">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    ({movie.vote_count.toLocaleString()}명)
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button className="px-6 py-2 bg-[#FF0558] text-white rounded-lg font-medium hover:bg-[#FF0558]/90 transition-colors">
                  찾기
                </button>
                <button className="px-6 py-2 bg-[#1a1a1a] text-white rounded-lg font-medium hover:bg-[#252525] transition-colors border border-gray-700">
                  보관함
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
