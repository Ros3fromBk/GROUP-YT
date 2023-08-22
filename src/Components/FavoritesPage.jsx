import React from 'react'

const FavoritesPage = ({ favoriteVideoIds, searchResults }) => {
    const favoriteVideos = searchResults.filter((video) => favoriteVideoIds.includes(video.id.videoId))

    return (
        <div>
            <h2>Favorite Videos</h2>
            {favoriteVideos.map((video) => (
                <div key={video.id.videoId} className="video-wrapper">
                    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <p>{video.snippet.title}</p>
                </div>
            ))}
        </div>
    )
}

export default FavoritesPage