import React from 'react';

function MusicCard(props){
    return (
        <>
            <div className='music-card-container'>
                <div className='thumbnail-container'>
                    <img className='thumbnail' alt="" src={props.src} />
                    <button className='play-button-on-image'><img id="play-icon" alt="play-button" src="/Images/play-icon.png" /></button>
                </div>
                <div className='small-description-card'>
                    <h5 className='main-heading-card'>{props.title}</h5>
                    <p className='main-heading-text'>{props.artist}, {props.playlist_name}</p>
                </div>

            </div>
        </>
    );
}

export default MusicCard;