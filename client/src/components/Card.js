import React from 'react';


const Card = props => {
    return (
        <div data-testid="card">
            <h1>{props.name}</h1>
            <p>{props.country}</p>
            <p>{props.searches}</p>
        </div>
    )
}

export default Card;
