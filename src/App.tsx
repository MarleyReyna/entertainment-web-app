import "./assets/App.scss";
import "./assets/index.scss";
import TV from "./Pages/TV/TV";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies";
import Header from "./Components/Header/Header";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
              <Home />
            }
          />
          <Route path="/movies" element={
              <Movies />
            }
          />
          <Route path="/tv" element={
              <TV />
            }
          />
          <Route path="/bookmarks" element={
              <Bookmarks />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
