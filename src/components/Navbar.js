import React from 'react';

function Navbar() {
    return (
        <nav className="menu navbar navbar-expand-lg navbar-toggler justify-content-center text-center fixed-top">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="">HOME</a></li>
                <li className="nav-item"><a className="nav-link" href="#targetabout">ABOUT ME</a></li>
                <li className="nav-item"><a className="nav-link" href="#targetprojects">PROJECTS</a></li>
                <li className="nav-item"><a className="nav-link" href="#targetcontact">CONTACT</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;