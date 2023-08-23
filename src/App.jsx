import { useState } from 'react'
import SearchBar from './Components/SearchBar.jsx'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import AboutList from './Components/AboutList.jsx';
import ShowPage from './Components/ShowPage.jsx'
import FavoritesPage from './Components/FavoritesPage.jsx';
import VideoPage from './Components/VideoPage.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [favoriteVideoIds, setFavoriteVideoIds] = useState([])
  const handleSearch = (items) => setSearchResults(items)

  const toggleFavorite = (videoId) => {
    if (favoriteVideoIds.includes(videoId)) {
      setFavoriteVideoIds(favoriteVideoIds.filter((id) => id !== videoId))
    } else {
      setFavoriteVideoIds([...favoriteVideoIds, videoId])
    }
  }

  return (
    <>

      <Router>

        <NavBar />
        {/* <img className="banner" src="https://typecast.ai/learn/wp-content/uploads/2022/08/22q3_39_main.jpg"/> */}
        <div>
          <SearchBar onSearch={handleSearch} />
        </div>
          <VideoPage searchResults={searchResults} toggleFavorite={toggleFavorite} favoriteVideoIds={favoriteVideoIds}/>

        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/AboutMe" element={<AboutList />} />
          <Route path="/video/:videoId" element={<ShowPage />} />
          <Route path="/favorites" element={<FavoritesPage favoriteVideoIds={favoriteVideoIds} searchResults={searchResults} />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
