import React, { useState } from "react";
import "./Movies.scss";
import Searchbar from "../../Components/Searchbar/Searchbar";
import { Item } from "../../Components/Item/Item";

const Movies = ({ changeBookmark, changeEmpty, movieList }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <main>
      <Searchbar
        changeBookmark={changeBookmark}
        changeEmpty={changeEmpty}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      <section className={!showContent ? "movies" : "movies hidden"}>
        <h1>Movies</h1>
        <ul>
          {movieList.map((item, index) => {
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

export default Movies;
