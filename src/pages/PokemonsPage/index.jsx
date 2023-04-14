import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PokemonCard } from '../../components';

// API URL - https://pokeapi.co/api/v2/pokemon?limit=151
// IMAGE END POINT - https://pokeapi.co/api/v2/pokemon/{id or name}/

const PokemonsPage = () => {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsInfo, setPokemonsInfo] = useState([]);
    // console.log('pokemons', pokemons)
    // console.log('info', pokemonsInfo)
    // const [caught, setCaught] = useState(false);
    // const [textFilter, setTextFilter] = useState("");

    useEffect(() => {
        async function loadPokemon() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const rawData = await response.json();
            const data = rawData.results
            setPokemons(data)
            data.map(async (pokemon) => {
                let pokemonName = pokemon.name
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
                const data = await res.json();
                setPokemonsInfo(...pokemonsInfo, data)
            })
        };
        
        loadPokemon();
    }, [])

    function getPokeInfo(pokemon) {
        let info = Object.values(pokemonsInfo).filter(info => pokemonsInfo.name == pokemon.name)
        for (let i in info) {
            if (i != []) return i
        }
    }

    function displayPokemons() {
        return pokemons.map(pokemon => (
            <PokemonCard pokemon={pokemon} info={getPokeInfo(pokemon)} />
        ))
    };

    return <main className="snack-main">
        <h1>All original Pokemon!</h1>
        {}
        <div className="snack-holder">
            { displayPokemons() }
        </div>
    </main>
};

export default PokemonsPage;