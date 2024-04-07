import React from 'react';
import Option from './utils/Options';


function Header() {
    function handleDropdown() {
        const dropDownElement = document.getElementById("dropdown-menu-container");
        let disp = dropDownElement.style.display;
        dropDownElement.style.display = disp == "none" ? "inline-block" : "none";
    }
    return (
    <>
        <header id="header">
        <div id="logo-container">
            <img alt="logo" id="logo-image" src="/Images/spotify-icon.png" />
        </div>
        <div className='option-container'>
            <Option name="Explore" location="#" />
            <Option name="Search" location="#" />
            <Option name="Library" location="#" />
            <Option name="My Account" location="#" />
        </div>
        <div className='option-icon'><img onClick={handleDropdown} alt='menu-icon' id='menu-icon' src="/Images/three-horizontal-lines-icon.png" /></div>
        <div id="dropdown-menu-container">
        <ul className="dropdown-menu position-static d-grid gap-1 p-2 rounded-0 mx-0 border-0 shadow w-220px" data-bs-theme="dark">
            <li><a className="dropdown-item rounded-2 active" href="#">Action</a></li>
            <li><a className="dropdown-item rounded-2" href="#">Another action</a></li>
            <li><a className="dropdown-item rounded-2" href="#">Something else here</a></li>
            <li><a className="dropdown-item rounded-2" href="#">Separated link</a></li>
        </ul>
        </div>
    </header>
    </>
    );
}

export default Header;