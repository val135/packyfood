import React from 'react';

function Navbar() {
    return (   
        <nav className="menu navbar navbar-expand navbar-dark fixed-top">
            <img src="/packyfood-logo-white.png" className="logo-left" alt="logo packyFood"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="justify-content-end ml-auto">
                <div className="collapse navbar-collapse" id="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#targetrestaurantes">Restaurantes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#targetcontacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;