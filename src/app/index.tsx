import { ContentsDetailPage } from "@pages/contents-detail-page";
import { HomePage } from "@pages/home-page";
import { SearchPage } from "@pages/search-page";
import { Route, Routes } from "react-router";
import "./style.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/contents/:id" element={<ContentsDetailPage />} />
    </Routes>
  );
};
