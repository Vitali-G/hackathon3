import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SnackPage = () => {

    const [loading, setLoading] = useState(false);
    const [snack, setSnack] = useState({});
    const {id} = useParams();

    useEffect(() => {

        setLoading(true);
        async function loadSnack() {

            const response = await fetch(`http://localhost:3000/snacks/${id}`);
            const data = await response.json();
            setSnack(data);
            setLoading(false);
        };

        loadSnack();

    }, [])

    function displaySnack() {
        return <main>
            <h1 className="close-title">{snack.name}</h1>
            <p><em>{snack.description}</em></p>
            <span className="votes-counter">Votes: {snack.votes}</span>
            <p className="snack-details-holder">
                { snack.vegetarian ? <span className="vegetarian icon">V</span> : ""}
                { snack.healthy ? <span className="healthy icon">H</span> : ""}
            </p>
            <Link to="/snacks">Back</Link>
        </main>
    }

    return loading ? <h2><em>loading...</em></h2> : displaySnack();

};

export default SnackPage;
