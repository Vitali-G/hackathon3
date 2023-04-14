import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const PokemonPage = () => {

    const [loading, setLoading] = useState(false);
    const [pokemon, setPokemon] = useState({});
    let { name } = useParams();
    console.log(name)

    useEffect(() => {

        setLoading(true);
        async function loadPokemon() {

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
            const data = await response.json();
            setPokemon(data);
            setLoading(false);
        };

        loadPokemon();

    }, [])

    function displayPokemon() {
        return <main>
            <h1 className="close-title">{pokemon.name}</h1>
            {/* <p><em>{snack.description}</em></p>
            <span className="votes-counter">Votes: {snack.votes}</span>
            <p className="snack-details-holder">
                { snack.vegetarian ? <span className="vegetarian icon">V</span> : ""}
                { snack.healthy ? <span className="healthy icon">H</span> : ""}
            </p>
            <Link to="/snacks">Back</Link> */}
        </main>
    }

    return loading ? <h2><em>loading...</em></h2> : displayPokemon();

};

export default PokemonPage;
