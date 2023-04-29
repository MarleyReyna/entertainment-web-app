import React, { useState } from "react";
import "./Home.scss";
import movieInfo from "../../MovieInfo";
import Searchbar from "../../Components/Searchbar/Searchbar";
import { Item, TrendingItem } from "../../Components/Item/Item";

const Home = ({ changeBookmark, changeEmpty }) => {
  const [showContent, setShowContent] = useState(false);
  const trending = movieInfo.filter((item) => item.isTrending === true);
  const recommended = movieInfo.filter((item) => item.isTrending === false);

  return (
    <main>
      <Searchbar
        changeBookmark={changeBookmark}
        changeEmpty={changeEmpty}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      <section className={!showContent ? "trending" : "trending hidden"}>
        <h1>Trending</h1>
        <ul>
          {trending.map((item, index) => {
            return (
              <li
                style={{
                  backgroundImage: `url(${item.thumbnail.trending.large})`,
                }}
                key={index}
              >
                <TrendingItem
                  item={item}
                  changeBookmark={changeBookmark}
                  changeEmpty={changeEmpty}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <section className={!showContent ? "recommended" : "recommended hidden"}>
        <h3>Recommneded for you</h3>
        <ul>
          {recommended.map((item, index) => {
            return (
              <li key={index}>
                <Item
                  item={item}
                  changeBookmark={changeBookmark}
                  changeEmpty={changeEmpty}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Home;
