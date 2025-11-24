import { MoviesAPI } from "@domains/movies/api";
import {
  type Movie,
  type MovieListResponse,
  type MovieType,
} from "@domains/movies/type";
import { useEffect, useState } from "react";

export const useMovieList = (activeTab: MovieType) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response: MovieListResponse =
          await MoviesAPI.getMovies(activeTab);
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
