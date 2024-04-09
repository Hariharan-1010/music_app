import React from 'react';

function Option(props){
    return(
        <>
            <div className = "option">
                <button onClick={() => {props.funct(props.value)}}>{props.name}</button>
            </div>
        </>
    );
}

export default Option;