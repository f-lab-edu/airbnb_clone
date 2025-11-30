import logoImage from "@app/assets/WATCHA_Logo_Main.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // url query와 searchQuery 동기화
  useEffect(() => {
    setSearchQuery(urlQuery);
  }, [urlQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      setSearchParams({ query });
    }, 300);
  };

  const handleLogoClick = () => {
    navigate("/");
    setSearchQuery("");
  };

  const handleSearchInputClick = () => {
    if (!searchQuery) {
      navigate("/search");
      return;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img src={logoImage} alt="왓챠" className="h-8 lg:h-10 w-auto" />
          </button>

          {/* Search */}
          <form
            className="flex-1 max-w-2xl mx-4 lg:mx-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={handleInputChange}
                onClick={handleSearchInputClick}
                placeholder="영화를 검색하세요..."
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF0558] focus:ring-1 focus:ring-[#FF0558] transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};
