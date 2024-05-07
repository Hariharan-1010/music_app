import React from 'react';
import MusicCardContainer from './utils/MusicCardContainer';

function Explore(){
    return (
        <>
            <MusicCardContainer playlist="most_listened" playlistTitle="Most Listened" />
            <MusicCardContainer playlist="PLAYLIST" />
            <MusicCardContainer playlist="PLAYLIST" />
            <MusicCardContainer playlist="PLAYLIST" />
        </>
    );
}

export default Explore;