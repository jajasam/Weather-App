import React from 'react'

function Music() {
    return (
        <div className="recommendation">
            <div className="overview">
                <div class="music-icon"></div>
                <h3>Listen to <span>Black Coffee</span></h3>
            </div>
            <div className="details">
                <iframe src="https://open.spotify.com/embed/track/4okxc2Ues75eVebvEzs1ff?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <h4>Deep in the bottom - Black Coffee</h4>
                <div>See more songs from Drake</div>
            </div>
        </div>
    )
}

export default Music
