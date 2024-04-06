import React from 'react';
import Option from './utils/Options';

function Header() {
    return (
    <>
        <header id="header">
        <div id="logo-container">
            <img alt="logo" id="logo-image" />
        </div>
        <div className='option-container'>
            <Option name="Explore" location="#" />
            <Option name="Search" location="#" />
            <Option name="Library" location="#" />
            <Option name="My Account" location="#" />
        </div>
    </header>
    </>
    );
}

export default Header;