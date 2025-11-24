import { axiosInstance } from "@lib/api";
import { MovieDetail, type MovieListResponse, type MovieType } from "./type";

export class MoviesAPI {
  static async getMovies(
    type: MovieType,
    page: number = 1
  ): Promise<MovieListResponse> {
    const response = await axiosInstance.get<MovieListResponse>(
      `/movie/${type}`,
      {
        params: { page, language: "ko" },
      }
    );
    return response.data;
  }

  static async searchMovies(query: string): Promise<MovieListResponse> {
    const response = await axiosInstance.get<MovieListResponse>(
      "/search/movie",
      {
        params: { query, language: "ko" },
      }
    );
    return response.data;
  }

  static async getMovieDetail(id: number): Promise<MovieDetail> {
    const response = await axiosInstance.get<MovieDetail>(`/movie/${id}`, {
      params: { language: "ko" },
    });
    return response.data;
  }
}
