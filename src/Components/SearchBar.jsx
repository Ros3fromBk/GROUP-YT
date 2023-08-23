import React, { useState } from 'react'
import "../Components/SearchBar.css"

const SearchBar = ({ onSearch }) => {

    const [query, setQuery] = useState("")

    const handleInputChange = e => setQuery(e.target.value)
    const handleSubmit = e => {
        e.preventDefault()
        const apiKey = import.meta.env.VITE_API_KEY
        const maxResults = 8
        fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}&part=snippet&type=video&maxResults=${maxResults}`)
            .then(r => r.json())
            .then(data => onSearch(data.items))
            .catch(err => console.log(err))
    }

    return (
        <div className='searchBar'>
            <aside id="search">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="row">
                            <label htmlFor="searchBar" className="col-auto col-form-label">
                                {/* Search YouTube */}
                            </label>
                            <div className="col">
                                <input
                                    id="searchBar"
                                    className="form-control"
                                    name="searchBar"
                                    type="text"
                                    placeholder="Search Videos..."
                                    value={query}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </aside>
        </div>
    )
}

export default SearchBar