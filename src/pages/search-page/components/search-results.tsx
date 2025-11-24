import { useSearchMovies } from "../use-search-movies";
import { SearchEmpty } from "./search-empty";
import { SearchError } from "./search-error";
import { SearchLoading } from "./search-loading";
import { SearchNoResults } from "./search-no-results";
import { SearchResultItem } from "./search-result-item";

type SearchResultsProps = {
  searchQuery: string;
};

export const SearchResults = ({ searchQuery }: SearchResultsProps) => {
  const { movies, loading, error } = useSearchMovies(searchQuery);

  if (!searchQuery) {
    return <SearchEmpty />;
  }

  if (loading) {
    return <SearchLoading />;
  }

  if (error) {
    return <SearchError error={error} />;
  }

  if (movies.length === 0) {
    return <SearchNoResults searchQuery={searchQuery} />;
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-white text-xl font-semibold mb-2">
          &quot;{searchQuery}&quot; 검색 결과
        </h2>
        <p className="text-gray-400 text-sm">영화 · {movies.length}개</p>
      </div>

      <div className="space-y-3">
        {movies.map((movie) => (
          <SearchResultItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
