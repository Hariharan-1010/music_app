import React from 'react';
import MusicCard from './MusicCard';

function MusicCardContainer(){
    return (
        <div className='main-card-container'>
            <div className="container-title">
                <h3 className='title-name'>Sample Title</h3>
            </div>
            <div className='cards-div'>
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <MusicCard />
                <div className='scroll-bar-margin'></div>  
            </div> 
        </div>
    );
}

export default MusicCardContainer;