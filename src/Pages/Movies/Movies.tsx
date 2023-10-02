import React, { useState } from "react";
import Search from "../Search/Search";
import FilteredCategory from "../../Components/FilteredCategory";
import { useSelector } from "react-redux";
import { type RootState } from "../../lib/types";

const Movies = () => {
  const [showContent, setShowContent] = useState(false);
  const media = useSelector((state: RootState) => state.media.media);
  const movies = media.filter((item) => item.category === "Movie");

  return (
    <main>
      <Search showContent={showContent} setShowContent={setShowContent}/>
      <section className={!showContent ? "movies" : "movies hidden"}>
        <h1>Movies</h1>
        <FilteredCategory category={movies}/>
      </section>
    </main>
  );
};

export default Movies;
