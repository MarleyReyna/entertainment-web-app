import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Movies from "./Movies/Movies";
import TV from "./TV/TV";
import Bookmarks from "./Bookmarks/Bookmarks";
import movieInfo from "./MovieInfo";
import bookmarkEmpty from "./assets/icon-bookmark-empty.svg";
import bookmark from "./assets/icon-bookmark-full.svg";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const movieList = movieInfo.filter((item) => item.category === "Movie");
  const tvList = movieInfo.filter((item) => item.category === "TV Series");

  const changeEmpty = (item) => {
    if (!item.isBookmarked) {
      return bookmarkEmpty;
    } else {
      return bookmark;
    }
  };

  const changeBookmark = (item) => {
    if (!item.isBookmarked) {
      item.isBookmarked = true;
      setBookmarks((c) => [...c, item]);
      document.getElementById(item.title).src = bookmark;
    } else {
      item.isBookmarked = false;
      setBookmarks((c) => {
        return c.filter((_, index) => index !== bookmarks.indexOf(item));
      });
      document.getElementById(item.title).src = bookmarkEmpty;
    }
  };

  useEffect(() => {
    const bookmarksPull = movieInfo.filter(
      (item) => item.isBookmarked === true
    );
    setBookmarks(bookmarksPull);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home changeBookmark={changeBookmark} changeEmpty={changeEmpty} />
            }
          />
          <Route
            exact
            path="/movies"
            element={
              <Movies
                changeBookmark={changeBookmark}
                changeEmpty={changeEmpty}
                movieList={movieList}
              />
            }
          />
          <Route
            exact
            path="/tv"
            element={
              <TV
                changeBookmark={changeBookmark}
                changeEmpty={changeEmpty}
                tvList={tvList}
              />
            }
          />
          <Route
            exact
            path="/bookmarks"
            element={
              <Bookmarks
                bookmarks={bookmarks}
                setBookmarks={setBookmarks}
                changeEmpty={changeEmpty}
                tvList={tvList}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
