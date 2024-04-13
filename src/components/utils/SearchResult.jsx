import React from 'react';
import MusicItem from './MusicItem';

function SearchResult(){
    const resultArray = [1, 2, 3, 4, 5, 6, 7, 8];
    const searchResult  = resultArray.map(result => <MusicItem />);
    return(
        <>
            <ul>
                {searchResult}
            </ul>
        </>
    );
}

export default SearchResult;