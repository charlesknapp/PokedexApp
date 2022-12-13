const express = require("express");
const app = express();
const pokemon  = require("./models/pokemon");

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

// Index route
app.get('/', (req, res) => {
    res.render('Index', {
        pokemon: pokemon
    })
});

//Show route
app.get( '/pokemon/:id', (req, res) => {
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    })
});

// App listening
app.listen( 3000, () => {
    console.log("listening")
});