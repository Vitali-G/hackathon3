import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ color: isActive ? '#2B061E' : '#875053'});

const PageWrapper = () => {
    return <>
        <header>
            <nav>
                <NavLink to="/" style={styles}>Home</NavLink>
                <NavLink to="/all" style={styles}>All Pokemon!</NavLink>
                <NavLink to="/myPoke" style={styles}>My Pokedex</NavLink>
                {/* <NavLink to="/add" style={styles}>Add your favorite snack</NavLink> */}
            </nav>
        </header>
        <Outlet />
        <footer>Pokedex 2023</footer>
    </>
};

export default PageWrapper;
