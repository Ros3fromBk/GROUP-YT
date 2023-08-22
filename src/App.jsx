import { useState } from 'react'
import SearchBar from './Components/SearchBar.jsx'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import AboutList from './Components/AboutList.jsx';
import ShowPage from './Components/ShowPage.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const [searchResults, setSearchResults] = useState([])
  const handleSearch = (items) => setSearchResults(items)

  return (
    <>

      <Router>
  
        <NavBar />
    {/* <img className="banner" src="https://typecast.ai/learn/wp-content/uploads/2022/08/22q3_39_main.jpg"/> */}
        <div>
          <SearchBar onSearch={handleSearch} />
          <div className="video-container">
            {searchResults.map((video) => (
              <div key={video.id.videoId} className="video-wrapper">
                <a href={`/video/${video.id.videoId}`}>
                  <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                </a>
                <p>{video.snippet.title}</p>
              </div>
            ))}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/AboutMe" element={<AboutList />} />
          <Route path="/video/:videoId" element={<ShowPage />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
