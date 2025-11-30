import { MoviesAPI } from "@domains/movies";
import { MovieDetail } from "@domains/movies/type";
import { useEffect, useState } from "react";

export const useMovieDetail = (id: number) => {
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await MoviesAPI.getMovieDetail(id);
        setMovieDetail(response);
      } catch {
        setError("영화 상세 정보를 불러오는데 실패했습니다.");
        setMovieDetail(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  return { movieDetail, loading, error };
};
