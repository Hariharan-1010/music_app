import React from 'react';
import Option from './utils/Options';

function Header(props) {
    
    function handleClick(value){
        props.func(boolState => ({
            'explore': false,
            'library': false,
            'search': false,
            'my-account': false,
            [value]: true,
        }));
    }
    function handleDropdown() {
        const dropDownElement = document.getElementById("dropdown-menu-container");
        let disp = dropDownElement.style.display;
        dropDownElement.style.display = disp === "none" ? "inline-block" : "none";
    }
    return (
    <>
        <header id="header">
        <div id="logo-container">
            <img alt="logo" id="logo-image" src="/Images/spotify-icon.png" />
        </div>
        <div className='option-container'>
            <Option funct={handleClick} name="Explore" value="explore" />
            <Option funct={handleClick} name="Search" value="search" />
            <Option funct={handleClick} name="Library" value="library" />
            <Option funct={handleClick} name="My Account" value="my-account" />
        </div>
        <div className='option-icon'><img onClick={handleDropdown} alt='menu-icon' id='menu-icon' src="/Images/three-horizontal-lines-icon.png" /></div>
        <div id="dropdown-menu-container">
        <ul className="dropdown-menu position-static d-grid gap-1 p-2 rounded-0 mx-0 border-0 shadow w-220px" data-bs-theme="dark">
            <li><button className="dropdown-item rounded-2" onClick={() => {handleClick("explore")}} >Explore</button></li>
            <li><button className="dropdown-item rounded-2" onClick={() => {handleClick("search")}} >Search</button></li>
            <li><button className="dropdown-item rounded-2" onClick={() => {handleClick("library")}} >Library</button></li>
            <li><button className="dropdown-item rounded-2" onClick={() => {handleClick("my-account")}} >My Account</button></li>
        </ul>
        </div>
    </header>
    </>
    );
}

export default Header;