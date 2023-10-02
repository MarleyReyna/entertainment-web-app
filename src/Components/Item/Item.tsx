import play from "../../assets/icon-play.svg";
import tvicon from "../../assets/icon-category-tv.svg";
import movieicon from "../../assets/icon-category-movie.svg";
import { changeEmpty } from "../../utils/changeEmpty";
import { useDispatch } from "react-redux";
import { addToBookmarks, removeFromBookmarks } from "../../Redux/mediaSlice";
import { type ItemProps } from "../../lib/types";

export const Item = ({ item }: ItemProps) => {
  const dispatch = useDispatch();

  const toggleBookmarks = (id: number, isBookmarked: boolean) => {
    if(isBookmarked) {
      return dispatch(removeFromBookmarks(id))
    } else{
      return dispatch(addToBookmarks(id))
    }
  }

  return (
    <li>
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${item.thumbnail.regular.large})`,
        }}
      >
        <div className="filter">
          <button className="bookmark" onClick={() => toggleBookmarks(item.id, item.isBookmarked)}>
            <img src={changeEmpty(item)} alt="Add or Remove From Bookmarks" id={item.title} />
          </button>
          <button className="play">
            <img src={play} alt="Play Content" />
            Play
          </button>
        </div>
      </div>
      <div className="movie-info">
        <p>{item.year}</p>
        <div className="circle-seperator" />
        <p>
          <img src={item.category === "Movie" ? movieicon : tvicon} alt={item.category} />
          {item.category}
        </p>
        <div className="circle-seperator" />
        <p>{item.rating}</p>
      </div>
      <h4>{item.title}</h4>
    </li>
  );
};
