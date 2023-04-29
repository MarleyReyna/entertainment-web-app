import React, { useState } from "react";
import "./Bookmarks.scss";
import Searchbar from "../../Components/Searchbar/Searchbar";
import { Item } from "../../Components/Item/Item";

const Bookmarks = ({ bookmarks, setBookmarks, changeEmpty }) => {
  const [showContent, setShowContent] = useState(false);
  const bookmarkMovie = bookmarks.filter((item) => item.category === "Movie");
  const bookmarkTV = bookmarks.filter((item) => item.category === "TV Series");

  const changeBookmark = (item) => {
    if (!item.isBookmarked) {
      item.isBookmarked = true;
      setBookmarks((c) => [...c, item]);
    } else {
      item.isBookmarked = false;
      setBookmarks((c) => {
        return c.filter((_, index) => index !== bookmarks.indexOf(item));
      });
    }
  };

  return (
    <main>
      <Searchbar
        changeBookmark={changeBookmark}
        changeEmpty={changeEmpty}
        showContent={showContent}
        setShowContent={setShowContent}
      />
      <section
        className={!showContent ? "bookmarked-page" : "bookmarked-page hidden"}
      >
        <h1>Bookmarked Movies</h1>
        <ul className="bookmarked-movies">
          {bookmarkMovie.map((item, index) => {
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
        <h2>Bookmarked TV Series</h2>
        <ul className="bookmarked-tv">
          {bookmarkTV.map((item, index) => {
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

export default Bookmarks;
