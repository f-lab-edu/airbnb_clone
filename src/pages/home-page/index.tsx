import { Layout } from "@components/layout";
import { useState } from "react";
import { MovieList } from "./components/movie-list";

import { type MovieType } from "@domains/movies";
import { Tabs } from "./components/tabs";

const tabs: { id: MovieType; label: string }[] = [
  { id: "now_playing", label: "Now Playing" },
  { id: "popular", label: "Popular" },
  { id: "top_rated", label: "Top Rated" },
  { id: "upcoming", label: "Upcoming" },
];

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<MovieType>("now_playing");

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-7xl">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <MovieList activeTab={activeTab} />
      </div>
    </Layout>
  );
};
