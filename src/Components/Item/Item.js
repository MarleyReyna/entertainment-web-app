import movieicon from "../../assets/icon-category-movie.svg";
import tvicon from "../../assets/icon-category-tv.svg";
import play from "../../assets/icon-play.svg";

export const Item = ({ item, changeBookmark, changeEmpty }) => {
  return (
    <>
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${item.thumbnail.regular.large})`,
        }}
      >
        <div className="filter">
          <button className="bookmark" onClick={() => changeBookmark(item)}>
            <img src={changeEmpty(item)} alt="" id={item.title} />
          </button>
          <button className="play">
            <img src={play} alt="" />
            Play
          </button>
        </div>
      </div>
      <div className="movie-info">
        <p>{item.year}</p>
        <div className="circle-seperator" />
        <p>
          <img src={item.category === "Movie" ? movieicon : tvicon} alt="" />
          {item.category}
        </p>
        <div className="circle-seperator" />
        <p>{item.rating}</p>
      </div>
      <h4>{item.title}</h4>
    </>
  );
};

export const TrendingItem = ({ item, changeBookmark, changeEmpty }) => {
  return (
    <>
      <div className="filter">
        <button className="bookmark" onClick={() => changeBookmark(item)}>
          <img src={changeEmpty(item)} alt="" id={item.title} />
        </button>
        <button className="play">
          <img src={play} alt="" />
          Play
        </button>
        <div className="movie-info">
          <p>{item.year}</p>
          <div className="circle-seperator" />
          <p>
            <img src={item.category === "Movie" ? movieicon : tvicon} alt="" />
            {item.category}
          </p>
          <div className="circle-seperator" />
          <p>{item.rating}</p>
        </div>
        <h2>{item.title}</h2>
      </div>
    </>
  );
};
