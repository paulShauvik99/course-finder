import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            
            <div className="outer_nav w-100">
                <div className="nav_main_div w-100 h-28 mt-12 mb-5">
                    {/* Nav List */}
                    <div className="menu align-content-center text-3xl  " >
                        <NavLink className="nav-link " to="/"> Home </NavLink> 
                        <NavLink className="nav-link " to="/about"> About </NavLink> 
                        <NavLink className="nav-link " to="/courses"> Courses </NavLink> 
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Navbar