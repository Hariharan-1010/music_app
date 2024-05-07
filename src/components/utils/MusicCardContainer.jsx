import React, { useEffect, useState } from 'react';
import MusicCard from './MusicCard';
import axios from 'axios';

function MusicCardContainer(props){
    
    const [result, setResult] = useState({});

    useEffect(function(){
    async function getResult(type) {
        try {
            const response = await axios.get(`http://localhost:8080/explore?type=${type}`);
            setResult(response.data);
        } catch (error) {
            console.log("Error occured");
        }
    }
    getResult(props.playlist);

},[props.playlist]);
    return (
        <div className='main-card-container'>
            <div className="container-title">
                <h3 className='title-name'>{props.playlistTitle}</h3>
            </div>
            <div className='cards-div'>
                <MusicCard title={result.title} src={result.img_path} artist={result.artist} playlist_title ={result.playlist_title}  />
                <MusicCard title="Title/PlayList" src="#" description="New Description" />
                <MusicCard title="Title/PlayList" src="#" description="New Description" />
                <MusicCard title="Title/PlayList" src="#" description="New Description" />
                <MusicCard title="Title/PlayList" src="#" description="New Description" />
                <MusicCard title="Title/PlayList" src="#" description="New Description" />
                <MusicCard title="Title/PlayList" src="#" description="New Description" />
                <MusicCard title="Title/PlayList" src="#" description="New Description" />
                <div className='scroll-bar-margin'></div>  
            </div> 
        </div>
    );
}


export default MusicCardContainer;