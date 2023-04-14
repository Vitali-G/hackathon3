import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ color: isActive ? '#2B061E' : '#875053'});

const PageWrapper = () => {
    return <>
        <header>
            <nav>
                <NavLink to="/" style={styles}>Home</NavLink>
                <NavLink to="/snacks" style={styles}>All snacks</NavLink>
                <NavLink to="/best" style={styles}>Best snack ever</NavLink>
                <NavLink to="/add" style={styles}>Add your favorite snack</NavLink>
            </nav>
        </header>
        <Outlet />
        <footer>Snack Rankings 2022</footer>
    </>
};

export default PageWrapper;
