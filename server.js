const PORT = 3000;
require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express")
const app = express()
const Pokemon  = require("./models/pokemon")

app.engine('jsx', require('express-react-views').createEngine())
app.set('view engine', 'jsx')
app.use(express.static('styles'))

// Needed to use req.body
app.use(express.urlencoded({ extended: false }))

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log("connected to MongoDB");
})

//INDEX
app.get("/", (req, res) => {
    //find all fruits
    Pokemon.find({}, (error, allPokemon)=>{
      res.render('Index', {
        Pokemon: allPokemon
      })
    }) 
  });

  // New Route
app.get("/new", (req, res) => {
    res.render('New')
});

// Post Route
app.post('/pokemon', (req, res) => {
    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect("/");
    });
})

//Show Route
app.get( '/pokemon/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
        res.render('Show', {
            pokemon: foundPokemon
        })
    })
});

// App listening
app.listen( 3000, () => {
    console.log("listening")
});