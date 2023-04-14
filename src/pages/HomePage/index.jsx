import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#875053'
  };

const HomePage = () => {
    return <main>
        <h1>Snack Rankings</h1>
        <p>Welcome to <b>Snack Rankings</b>, the world's most famous snack-ranking site!</p>
        <p>Rank snacks, see scores, and have a snackalicious time!</p>
        <ul>
            <li><Link to="/snacks" style={linkStyle}>Explore snacks</Link></li>
            <li><Link to="/best" style={linkStyle}>See the champion</Link></li>
        </ul>
    </main>
};

export default HomePage;