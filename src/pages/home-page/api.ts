import { axiosInstance } from "@/lib/api";
import { type MovieListResponse, type TabType } from "./type";

export class MovieListAPI {
  static async getMovies(
    tab: TabType,
    page: number = 1
  ): Promise<MovieListResponse> {
    const response = await axiosInstance.get<MovieListResponse>(
      `/movie/${tab}`,
      {
        params: { page, language: "ko" },
      }
    );
    return response.data;
  }
}
