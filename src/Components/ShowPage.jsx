import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import "../Components/ShowPage.css"

const ShowPage = () => {

    const [videoDetails, setVideoDetails] = useState(null)
    const { videoId } = useParams()
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])

    useEffect(() => {
        if (videoId) {
            const apiKey = import.meta.env.VITE_API_KEY
            fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`)
                .then(r => r.json())
                .then(data => { if (data.items.length > 0) setVideoDetails(data.items[0]) })
                .catch(err => { console.log(err) })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && comment) {
            const newComment = { name, comment }
            setComments([...comments, newComment])
            setName("")
            setComment("")
        }
    }

    return (
        <div>
            {videoDetails && (
                <div className="youtube">
                    <h2>{videoDetails.snippet.title}</h2>
                    <iframe
                        width="550"
                        height="300"
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?privacy-enhanced=1`}
                        color="white"
                        title={videoDetails.snippet.title}
                        allowFullScreen
                    ></iframe>
                </div>
            )}
            <div className="viewer-comments">
                <h3>Comments</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <strong>{comment.name}: </strong>
                            {comment.comment}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='comment-form'>
                <h3>Add a Comment</h3>
                <form onSubmit={handleSubmit}>
                    <div className="comment-name">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="comment-comment">
                        <label htmlFor="comment">Comment:</label>
                        <textarea
                            id="comment"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit">Submit Comment</button>
                </form>
            </div>
        </div>
    )
}

export default ShowPage