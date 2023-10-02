import React, { useState } from "react";
import { type ItemType, ShowSearchProps } from "../../lib/types";
import SearchContent from "../../Components/SearchUI/SearchContent";
import Searchbar from "../../Components/SearchUI/Searchbar";

const Search = ({ showContent, setShowContent }: ShowSearchProps) => {
  const [searchTag, setSearchTag] = useState("");
  const [searchResults, setSearchResults] = useState<ItemType[]>([]);

  return (
    <section className="search">
      <Searchbar setShowContent={setShowContent} setSearchTag={setSearchTag} setSearchResults={setSearchResults}/>
      <SearchContent showContent={showContent} searchResults={searchResults} searchTag={searchTag}/>
    </section>
  );
};

export default Search;