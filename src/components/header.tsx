import logoImage from "@app/assets/WATCHA_Logo_Main.png";
import { useState } from "react";
import { useNavigate } from "react-router";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleLogoClick = () => {
    navigate("/");
    setSearchQuery("");
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
            onSubmit={handleSearch}
            className="flex-1 max-w-2xl mx-4 lg:mx-8"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
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

          {/* Placeholder for future menu items */}
          <div className="w-20"></div>
        </div>
      </div>
    </header>
  );
};
