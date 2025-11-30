import { useSearchParams } from "react-router";
import { SearchResults } from "./components/search-results";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-7xl">
      <SearchResults searchQuery={searchQuery} />
    </div>
  );
};
