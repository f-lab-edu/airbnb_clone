import { useEffect, useState } from "react";
import { MovieListAPI } from "./api";
import { type Movie, type MovieListResponse, type TabType } from "./type";

export const useMovieList = (activeTab: TabType) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response: MovieListResponse =
          await MovieListAPI.getMovies(activeTab);
        setMovies(response.results);
      } catch (err) {
        setError("영화 데이터를 불러오는데 실패했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [activeTab]);

  return { movies, loading, error };
};
