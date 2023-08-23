import React from 'react'

const VideoPage = ({searchResults, toggleFavorite, favoriteVideoIds}) => {
    return (
        <div className="video-container">
            {searchResults.map((video) => (
                <div key={video.id.videoId} className="video-wrapper">
                    <a href={`/video/${video.id.videoId}`}>
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    </a>
                    <p>{video.snippet.title}</p>
                    <button onClick={() => toggleFavorite(video.id.videoId)}>
                        {favoriteVideoIds.includes(video.id.videoId) ? 'Unfavorite' : 'Favorite'}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default VideoPage