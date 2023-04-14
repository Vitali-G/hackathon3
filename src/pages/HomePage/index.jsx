import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#875053'
  };

const HomePage = () => {
    return <main>
        <h1>Gotta catch 'em all - Personal Pokedex!</h1>
        <p>Welcome to your <b>Personal Pokedex</b>!</p>
        <ul>
            <li><Link to="/all" style={linkStyle}>Explore pokemons</Link></li>
        </ul>
    </main>
};

export default HomePage;