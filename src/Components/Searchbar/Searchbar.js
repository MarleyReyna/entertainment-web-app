import React, { useState, useEffect } from "react";
import "./Searchbar.scss";
import MovieInfo from "../../MovieInfo";
import search from "../../assets/icon-search.svg";
import { Item } from "../Item/Item";

const Searchbar = ({
  changeBookmark,
  changeEmpty,
  showContent,
  setShowContent,
}) => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTag, setSearchTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loadContent();
  };

  const loadContent = () => {
    setShowContent((c) => (c = true));
    setSearchResults(
      (results) =>
        (results = MovieInfo.filter((item) => {
          return item.title.toLowerCase().includes(input.toLowerCase());
        }))
    );
    setSearchTag((c) => (c = input));
  };

  useEffect(() => {
    setShowContent((c) => (c = false));
  }, [input, setShowContent]);

  return (
    <section className="search">
      <div className="searchbar">
        <img src={search} alt="" aria-hidden="true" />
        <form onSubmit={handleSubmit}>
          <input
            id="search-input"
            placeholder="Search for movies or TV series"
            aria-label="Search media"
            role="search"
            onChange={(event) => setInput(event.target.value)}
          />
        </form>
      </div>
      <div
        className={
          showContent ? "searchbar-content" : "searchbar-content hidden"
        }
      >
        <h1 aria-live="polite">
          {" "}
          Found {searchResults.length} results for '{searchTag}'
        </h1>
        <ul>
          {searchResults.map((item, index) => {
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
      </div>
    </section>
  );
};

export default Searchbar;
