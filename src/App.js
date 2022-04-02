import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import TV from './TV/TV';
import Bookmarks from './Bookmarks/Bookmarks'
import movieInfo from './MovieInfo';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const movieList = movieInfo.filter(item => item.category === "Movie")
  const tvList = movieInfo.filter(item => item.category === "TV Series")

  useEffect(() =>{
    const bookmarksPull = movieInfo.filter(item => item.isBookmarked === true);
    setBookmarks(bookmarksPull)
  }, [])

  console.log(bookmarks)

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Home bookmarks={bookmarks}/>}/>
          <Route exact path='/movies' element={<Movies bookmarks={bookmarks} movieList={movieList}/>}/>
          <Route exact path='/tv' element={<TV bookmarks={bookmarks} tvList={tvList}/>}/>
          <Route exact path='/bookmarks' element={<Bookmarks bookmarks={bookmarks} tvList={tvList}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
