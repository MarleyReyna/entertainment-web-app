import React, { useState } from "react";
import Search from "../Search/Search";
import FilteredCategory from "../../Components/FilteredCategory";
import { useSelector } from "react-redux";
import { type RootState } from "../../lib/types";

const TV = () => {
  const [showContent, setShowContent] = useState(false);
  const media = useSelector((state: RootState) => state.media.media);
  const tvSeries = media.filter((item) => item.category === "TV Series");

  return (
    <main>
      <Search showContent={showContent} setShowContent={setShowContent}/>
      <section className={!showContent ? "tv-series" : "tv-series hidden"}>
        <h1>TV Series</h1>
        <FilteredCategory category={tvSeries}/>
      </section>
    </main>
  );
};

export default TV;
