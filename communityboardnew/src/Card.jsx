import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <h2 className="card-title">{props.genre}</h2>
            <img className="card-image" src={props.picture} alt="Picture Movie"></img>
            <p className="card-text">{props.movie}</p>
            <p className="card-description">{props.description}</p>
            <button className="card-button" onClick={props.onButtonClick}>Learn More</button>
        </div>
    );
}

export default Card;