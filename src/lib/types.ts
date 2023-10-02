import React from "react"

// Item Types
export type ItemType = {
  id: number;
  title: string;
    thumbnail: {
      trending?: {
        small: string;
        large: string;
      };
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}

export type ItemProps = {
  item: ItemType;
  style?: React.CSSProperties;
}

// Category Types
export type CategoryProps = {
  category: ItemType[];
}

// Root State Types
export type RootState = {
  bookmark: {bookmarks: ItemType[]};
  media: {media: ItemType[]};
}

// Search Props Types
export type SearchProps = {
  showContent: boolean;
  searchResults: ItemType[];
  searchTag: string;
}

export type ShowSearchProps = {
  showContent: boolean;
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
}

export type SearchBarProps = {
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchTag: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<React.SetStateAction<ItemType[]>>;
}