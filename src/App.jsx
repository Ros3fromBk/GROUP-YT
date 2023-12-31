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
  const handleSearch = (items) => {
    setSearchResults(items)
    if (window.location.pathname !== "/") {
      setSearchResults([]);
    }
  }

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
      
        <div>
          <SearchBar onSearch={handleSearch} />
        </div>
    

        <Routes>
          <Route path="/" element={searchResults.length > 0 ? 
          <VideoPage searchResults={searchResults} toggleFavorite={toggleFavorite} favoriteVideoIds={favoriteVideoIds} /> : <div></div>} />
          <Route path="/AboutMe" element={<AboutList />} />
          <Route path="/video/:videoId" element={<ShowPage />} />
          <Route path="/favorites" element={<FavoritesPage favoriteVideoIds={favoriteVideoIds} searchResults={searchResults} />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
