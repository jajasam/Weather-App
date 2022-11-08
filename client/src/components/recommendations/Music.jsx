import React from 'react'

function Music() {
    return (
        <div className="recommendation">
            <div className="overview">
                <div class="music-icon"></div>
                <h3><span>Music</span></h3>
            </div>
            <div className="details">
                <iframe src="https://open.spotify.com/embed/track/2TpxZ7JUBn3uw46aR7qd6V?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <h4>Listen to Drake</h4>
                <div>See more songs from Drake</div>
            </div>
        </div>
    )
}

export default Music
