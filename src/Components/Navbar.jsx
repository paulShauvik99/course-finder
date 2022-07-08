import React from 'react'
import logo from '../Images/images.png'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="mt-2 container-fluid">
                    <img className="navbar-brand" src={logo} alt='logo' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto me-5 ">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/chart">See Charts</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar