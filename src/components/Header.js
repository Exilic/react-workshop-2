import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">React</Link>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <Link className="nav-link" to="/home">Home</Link>
                            <Link className="nav-link" to="/person">Person</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/crud">Crud Demo</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;