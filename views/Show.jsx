import React from "react";
import pokemon from "../models/pokemon";

class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon
        console.log(this.props.pokemon);
        return (
            <div>
                <h1 className="title">Show Route</h1>
                <p>{pokemon.name} is <img src={pokemon.img} alt={pokemon.name}></img></p>
                <a href="/" className="backToHome">Back To Homepage</a>
            </div>
        )
    }
}

export default Show;