import React from 'react';

function MusicCard(){
    return (
        <>
            <div className='music-card-container'>
                <div className='thumbnail-container'>
                    <img className='thumbnail' alt="" src="" />
                    <button className='play-button-on-image'><img id="play-icon" alt="play-button" src="/Images/play-icon.png" /></button>
                </div>
                <div className='small-description-card'>
                    <h5 className='main-heading-card'>Song/ Playlist Name</h5>
                    <p className='main-heading-text'>this is a small description the song, artist or maybe even about the playlist</p>
                </div>

            </div>
        </>
    );
}

export default MusicCard;