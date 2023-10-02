import React, { useState } from "react";
import Search from "../Search/Search";
import TrendingSection  from "./TrendingSection";
import FilteredCategory from "../../Components/FilteredCategory";
import { useSelector } from "react-redux";
import { type RootState } from "../../lib/types";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const media = useSelector((state: RootState) => state.media.media);
  const trending = media.filter((item) => item.isTrending);
  const recommended = media.filter((item) => !item.isTrending);

  return (
    <main>
      <Search showContent={showContent} setShowContent={setShowContent}/>
      <section className={!showContent ? "trending" : "trending hidden"}>
        <h1>Trending</h1>
        <TrendingSection category={trending}/>
      </section>
      <section className={!showContent ? "recommended" : "recommended hidden"}>
        <h3>Recommneded for you</h3>
        <FilteredCategory category={recommended}/>
      </section>
    </main>
  );
};

export default Home;
