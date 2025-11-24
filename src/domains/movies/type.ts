export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type MovieDetail = Movie & {
  backdrop_path: string;
  genres: Genre[];
  original_title: string;
  runtime: number;
  tagline: string;
};

export type MovieListResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MovieType = "now_playing" | "popular" | "top_rated" | "upcoming";
