import React from 'react';

function Navbar() {
    return (
        /*
        <nav className="menu navbar navbar-expand-lg navbar-toggler justify-content-center text-center fixed-top">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="">HOME</a></li>
                <li className="nav-item"><a className="nav-link" href="#targetabout">ABOUT ME</a></li>
                <li className="nav-item"><a className="nav-link" href="#targetprojects">PROJECTS</a></li>
                <li className="nav-item"><a className="nav-link" href="#targetcontact">CONTACT</a></li>
            </ul>
        </nav>
        */
        <nav className="menu navbar navbar-expand navbar-dark fixed-top">
            <img src="/packyfood-logo-white.png" className="logo-left"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="justify-content-end ml-auto">
                <div className="collapse navbar-collapse" id="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Restaurantes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;