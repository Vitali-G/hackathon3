import React from 'react';
import { Link } from 'react-router-dom';
// IMAGE END POINT - https://pokeapi.co/api/v2/pokemon/{id or name}/
const linkStyle = {
    color: '#875053'
  };

const PokemonCard = ({ pokemon }) => {
    console.log(pokemon)
    console.log(pokemon.name)

    return <div className='snack-card'>
        
        <h3><Link to={`/pokemon/${pokemon.name}`} style={linkStyle}>{pokemon.name}</Link></h3>
        {/* <p><span className="votes-counter">Votes: {votes}</span></p>
        <p className="snack-details-holder">
            { vegetarian ? <span className="vegetarian icon">V</span> : ""}
            { healthy ? <span className="healthy icon">H</span> : ""}
            <button onClick={() => vote(id, 1)}>+</button>
            <button onClick={() => vote(id, -1)}>-</button>
        </p>
        <button onClick={() => deleteSnack(id)}>Delete</button>
        <br></br> */}
    </div>
};

export default PokemonCard;
