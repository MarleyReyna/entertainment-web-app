import {type ItemType} from '../lib/types';
import bookmark from "../assets/icon-bookmark-full.svg";
import bookmarkEmpty from "../assets/icon-bookmark-empty.svg";

export const changeEmpty = (item: ItemType) => {
    if (!item.isBookmarked) {
      return bookmarkEmpty;
    } else {
      return bookmark;
    }
};
