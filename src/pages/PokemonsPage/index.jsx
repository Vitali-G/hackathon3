import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { SnackFilters, SnackCard } from '../../components';

// https://pokeapi.co/api/v2/pokemon?limit=151

const PokemonsPage = () => {

    const [pokemons, setPokemons] = useState([]);
    const [healthyOnly, setHealthyOnly] = useState(false);
    const [vegetarianOnly, setVegetarianOnly] = useState(false);
    const [textFilter, setTextFilter] = useState("");

    // async function vote(id, value) {
    //     const options = {
    //         method: "PATCH",
    //         headers: { 'Content-Type': 'application/json' },    
    //         body: JSON.stringify({
    //             votes: value
    //         })
    //     }
    //     const response = await fetch(`http://localhost:3000/snacks/${id}`, options);
    //     const data = await response.json();
        
    //     setSnacks(snacks.map(s => s.id == data.id ? { ...s, votes: data.votes } : s))
    // }

    // async function deleteSnack(id) {
    //     const options = {
    //         method: "DELETE",
    //         headers: { 'Content-Type': 'application/json' }
    //     }
    //     const response = await fetch(`http://localhost:3000/snacks/${id}`, options);
    //     await response.json();
    // }

    useEffect(() => {
        async function loadPokemon() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await response.json();
            setPokemons(data);
        };
        
        loadPokemon();
    }, [pokemons])

    function displayPokemons() {
        return snacks
                .filter(s => !vegetarianOnly || s.vegetarian)
                .filter(s => !healthyOnly || s.healthy)
                .filter(s => textFilter.length == 0 || s.name.toLowerCase().includes(textFilter.toLowerCase()))
                .map(s => <SnackCard key={s.id} id={s.id} name={s.name}
                            vegetarian={s.vegetarian}
                            votes={s.votes} vote={vote} deleteSnack={deleteSnack} />)
    }

    return <main className="snack-main">
        <h1>All original Pokemon!</h1>
        <SnackFilters healthyOnly={healthyOnly} vegetarianOnly={vegetarianOnly} textFilter={textFilter}
            setHealthyOnly={setHealthyOnly} setVegetarianOnly={setVegetarianOnly} setTextFilter={setTextFilter}
        />
        <div className="snack-holder">
            { displaySnacks() }
        </div>
    </main>
};

export default SnacksPage;
