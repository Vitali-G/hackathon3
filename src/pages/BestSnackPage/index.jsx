import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const linkStyle = {
    color: '#875053'
  };

const BestSnackPage = () => {

    const [loading, setLoading] = useState(false);
    const [snack, setSnack] = useState({});

    useEffect(() => {

        setLoading(true);
        async function loadSnack() {

            const response = await fetch("http://localhost:3000/snacks/top");
            const data = await response.json();
            setSnack(data);
            setLoading(false);
        };

        loadSnack();

    }, [])

    function displaySnack() {
        return <main>
            <h2>The best snack ever:</h2>
            <h1 className="close-title">{snack.name}</h1>
            <p><em>{snack.description}</em></p>
            <span className="votes-counter">Votes: {snack.votes}</span>
            <p className="snack-details-holder">
                { snack.vegetarian ? <span className="vegetarian icon">V</span> : ""}
                { snack.healthy ? <span className="healthy icon">H</span> : ""}
            </p>
            
            <Link to="/snacks" style={linkStyle}>View the competition</Link>
        </main>
    }

    return loading ? <h2><em>loading...</em></h2> : displaySnack();

};

export default BestSnackPage;