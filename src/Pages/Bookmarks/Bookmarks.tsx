import React, { useState } from "react";
import Search from "../Search/Search"
import { useSelector } from "react-redux";
import { type RootState } from "../../lib/types";
import FilteredCategory from "../../Components/FilteredCategory";

const Bookmarks = () => {
  const [showContent, setShowContent] = useState(false);
  const media = useSelector((state: RootState) => state.media.media);
  const bookmarks = media.filter((item) => item.isBookmarked);

  return (
    <main>
      <Search showContent={showContent} setShowContent={setShowContent}/>
      <section className={!showContent ? "bookmarked-page" : "bookmarked-page hidden"}>
        <h1>Bookmarked Movies</h1>
        <FilteredCategory category={bookmarks.filter((item) => item.category === "Movie")} />
        <h2>Bookmarked TV Series</h2>
        <FilteredCategory category={bookmarks.filter((item) => item.category === "TV Series")} />
      </section>
    </main>
  );
};

export default Bookmarks;
