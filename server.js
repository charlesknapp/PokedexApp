const express = require("express");
const app = express();
const pokemons  = require("./models/pokemon");

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

// Index route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

//Show route
app.get( '/pokemon', (req, res) => {
    // res.send(pokemon[req.params.id])
    // res.send(pokemon)
    res.render('Show', {
        pokemon: pokemons[req.params.id]
    })
});

// App listening
app.listen( 3000, () => {
    console.log("listening")
});