import React, { useState } from "react";
import "./TV.scss";
import Searchbar from "../../Components/Searchbar/Searchbar";
import { Item } from "../../Components/Item/Item";

const TV = ({ changeBookmark, changeEmpty, tvList }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <main>
      <Searchbar
        changeBookmark={changeBookmark}
        changeEmpty={changeEmpty}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      <section className={!showContent ? "tv-series" : "tv-series hidden"}>
        <h1>TV Series</h1>
        <ul>
          {tvList.map((item, index) => {
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

export default TV;
