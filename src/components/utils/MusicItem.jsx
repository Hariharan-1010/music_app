import React from 'react';

function MusicItem(){
    return(
        <li className='music-item-list'>
            <div className='music-item-div'>
                <div className='music-img-div'>
                    <img className='music-item-img' />
                </div>
                <div className='description-div'>
                    <h6>Music Title</h6>
                    <p>Artist</p>
                </div>
                <div className='play-button-holder'>
                    <button className='play-button-on-list'><img id="play-icon" alt="play-button" src="/Images/play-icon.png" /></button>
                </div>
            </div>
        </li>
    );
}

export default MusicItem;