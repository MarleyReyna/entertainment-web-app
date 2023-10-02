import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import search from "../../assets/icon-search.svg";
import { type RootState, ItemType, SearchBarProps } from "../../lib/types";

const Searchbar = ({ setShowContent, setSearchTag, setSearchResults }: SearchBarProps) => {
  const [input, setInput] = useState("");
  const media = useSelector((state: RootState) => state.media.media);

  // Filter media based on search input
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowContent((c: boolean) => (c = true));
    setSearchResults((results: ItemType[]) => results = media.filter((item) => {
          return item.title.toLowerCase().includes(input.toLowerCase());
        })
    );
    setSearchTag((c: string) => (c = input));
  };

  // Hide search content when input is empty/deleted
  useEffect(() => {
    setShowContent((c: boolean) => c = false);
  }, [input, setShowContent]);

  return (
      <div className="searchbar">
        <img src={search} alt="Search" aria-hidden="true" />
        <form onSubmit={handleSubmit}>
          <input id="search-input"
            placeholder="Search for movies or TV series"
            aria-label="Search media"
            role="search"
            onChange={(event) => setInput(event.target.value)}
          />
        </form>
      </div>
  );
};

export default Searchbar;
