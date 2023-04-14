import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#875053'
  };

const PokemonCard = ({ id, name, healthy, vegetarian, votes, vote, deleteSnack }) => {

    return <div className='snack-card'>
        <h3><Link to={`/pokemon/${name}`} style={linkStyle}>{name}</Link></h3>
        <p><span className="votes-counter">Votes: {votes}</span></p>
        <p className="snack-details-holder">
            { vegetarian ? <span className="vegetarian icon">V</span> : ""}
            { healthy ? <span className="healthy icon">H</span> : ""}
            <button onClick={() => vote(id, 1)}>+</button>
            <button onClick={() => vote(id, -1)}>-</button>
        </p>
        <button onClick={() => deleteSnack(id)}>Delete</button>
        <br></br>
    </div>
};

export default PokemonCard;
