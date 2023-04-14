import React, { useState, useEffect } from 'react'

export default function Pokemon() {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
        async function loadPokemon() {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await response.json();
            setPokemons(data['results']);
        };
        
        loadPokemon();
    }, [])

    return (
    <div>Pokemon test page</div>
  )
}
