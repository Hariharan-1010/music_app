import React from 'react';

function Option(props){
    return(
        <>
            <div className = "option">
                <a href={props.path}>{props.name}</a>
            </div>
        </>
    );
}

export default Option;
