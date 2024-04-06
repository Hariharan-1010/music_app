import React from 'react';

function Option(props){
    return(
        <>
            <div className = "option">
                <a href={props.location} >{props.name}</a>
            </div>
        </>
    );
}

export default Option;