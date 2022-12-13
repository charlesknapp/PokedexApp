import React from "react";
import pokemon from "../models/pokemon";

// CSS STYLING
const imageStyling = {
    padding: '8px',
    borderRadius: '10px',
    // backgroundColor: '#2a2a2a',
    width: '250px',
    height: 'auto',
    marginTop: '-1%',
    mixBlendMode: 'multiply'
  };
// CENTERED STYLING
const centeredStyling = {
    background: 'orange',
    padding: '8px',
    fontSize: '20px',
    borderRadius: '7px',
    fontFamily: 'monospace',
    textAlign: 'center',
    maxWidth: '968px',
    margin: '0 auto',
}

class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon
        console.log(this.props.pokemon);
        return (
            <div style={centeredStyling}>
                <a href="/" className="homeLink"><img src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="PokeDex Logo" /></a>
                <h1 className="title">Gotta Catch 'Em All</h1>
                <h2 className="pokeName">{pokemon.name}</h2>
                <img style={imageStyling} src={pokemon.img} alt={pokemon.name}></img>
                <br />
                <br />
                <br />
                <div className="footer">
                    <a href="/" className="backToHome">Back</a>
                </div>
            </div>
        )
    }
}

export default Show;