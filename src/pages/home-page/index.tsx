import { useState } from "react";
import { MovieList } from "./components/movie-list";

import { Tabs } from "./components/tabs";
import { type TabType } from "./type";

const tabs: { id: TabType; label: string }[] = [
  { id: "now_playing", label: "Now Playing" },
  { id: "popular", label: "Popular" },
  { id: "top_rated", label: "Top Rated" },
  { id: "upcoming", label: "Upcoming" },
];

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("now_playing");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">영화 목록</h1>

        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <MovieList activeTab={activeTab} />
      </div>
    </div>
  );
};
