import { useParams } from "react-router";
import { MovieDetailContent } from "./components/movie-detail-content";
import { MovieDetailError } from "./components/movie-detail-error";
import { MovieDetailHeader } from "./components/movie-detail-header";
import { MovieDetailLoading } from "./components/movie-detail-loading";
import { useMovieDetail } from "./use-movie-detail";

export const ContentsDetailPage = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("ID is required");
  }

  return <ContentsDetailPageContent id={Number(id)} />;
};

type ContentsDetailPageContentProps = {
  id: number;
};

const ContentsDetailPageContent = ({ id }: ContentsDetailPageContentProps) => {
  const { movieDetail, loading, error } = useMovieDetail(id);

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-7xl">
        <MovieDetailLoading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-7xl">
        <MovieDetailError error={error} />
      </div>
    );
  }

  if (!movieDetail) {
    return null;
  }

  return (
    <div className="min-h-screen -mt-16 lg:-mt-20">
      <MovieDetailHeader movie={movieDetail} />
      <MovieDetailContent movie={movieDetail} />
    </div>
  );
};
