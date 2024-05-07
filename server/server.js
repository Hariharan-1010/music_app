import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';



const app = express();
const port = 8080;

const sampleMusicObject = {title: 'Two of Us', album: 'Liked songs', song_description: 'This is a good song, listen to it if you get time'}; //values.row[0];

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send(sampleMusicObject);
});
app.get("/explore/", (req, res) => {
    try {
        const type = req.query.type;
        if(req.query.offset || req.query.playlist_id) {
            const result = forExplore(type, req.query.offset || req.query.playlist_id);
            res.send(result);
        } else {
            const result = forExplore(type);
            res.send(result);
        }
        
    } catch (error) {
        console.log('error in most_listened');
    }  
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

/*
    i have to send all the the data when some one hit the get route;
    lets say we do it like this. Every seperate music container hits some separate api.
*/

function forExplore(...args){
    let offset = 0;
    if(args[0] === 'most_listened'){
        if(args[1]) offset = args[1];
        // SELECT title, artist_name, playlist_title, thumbnail_path  from song S JOIN song_artist SA ON S.song_id=SA.song_id JOIN artist A ON A.artist_id=SA.artist_id JOIN playlist_song PS ON PS.song_id = S.song_id ORDER BY streams DESC LIMIT 10 OFFSET {offset};
        const mostListenedSongs = {title: 'most s', artist: 'GENZ', playlist_title: 'Sunrise', img_path: '/#'}; //values.row[0];
        console.log(offset);
        return mostListenedSongs;
    }
}