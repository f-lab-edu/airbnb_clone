import { MovieDetail } from "@domains/movies/type";

type MovieDetailContentProps = {
  movie: MovieDetail;
};

export const MovieDetailContent = ({ movie }: MovieDetailContentProps) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
      <div className="max-w-4xl">
        {/* Overview */}
        {movie.overview && (
          <div className="mb-8">
            <h2 className="text-white text-xl font-semibold mb-4">개요</h2>
            <p className="text-gray-300 leading-relaxed text-base">
              {movie.overview}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
