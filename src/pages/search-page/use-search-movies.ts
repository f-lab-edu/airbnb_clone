import { Movie, MoviesAPI } from "@domains/movies";
import { useEffect, useState } from "react";

export const useSearchMovies = (searchQuery: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searchQuery.trim()) {
        setMovies([]);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await MoviesAPI.searchMovies(searchQuery);
        setMovies(response.results);
      } catch {
        setError("검색 중 오류가 발생했습니다.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return { movies, loading, error };
};
