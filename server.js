// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/book');
const methodOverride = require('method-override');

// initialize app
const app = express();

// configure settings
require('dotenv').config();

// connect to and configure mongoDB with mongoose

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

// set up mongodb event listeners
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.log('MongoDB Error: ' + err.message));

// setting up view engine
app.set("view engine", "jsx"); // sets up jsx for react
app.engine("jsx", require("express-react-views").createEngine()); // creates jsx engine

// mount middleware
app.use(express.urlencoded({ extended: false })); // creates req.body
app.use(express.static('public')); // sets up public folder for static files
app.use(methodOverride('_method')); // allows us to use PUT and DELETE routes

// mount routes

// index route
app.get('/books', (req, res) => {
    Book.find({}, (err, books) => {
        if (err) {
            res.send(err);
        } else {
            res.render('Index.jsx', {
                books: books
            });
        }
    });
})

// new route
app.get('/books/new', (req, res) => {
    res.render('New.jsx');
})

// create route
app.post('/books', (req, res) => {
    if (req.body.completed === 'on') {
        req.body.completed = true;
    } else {
        req.body.completed = false;
    }
    Book.create(req.body, (err, book) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/books');
        }
    })
});

// read route
app.get('/books/:id', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err) {
            res.send(err);
        } else {
            res.render('Show.jsx', {
                book: book
            });
        }
    })
})


// edit route
app.get('/books/:id/edit', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err) {
            res.send(err);
        } else {
            res.render('Edit.jsx', {
                book: book
            });
        }
    })
})

// update route
app.put('/books/:id', (req, res) => {
    if (req.body.completed === 'on') {
        req.body.completed = true;
    } else {
        req.body.completed = false;
    }
    Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, book) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/books');
        }
    })
})

// delete route
app.delete('/books/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, (err, book) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/books');
        }
    })
})


// tell the app to listen

const PORT = process.env.PORT || 3000;
// heroku or any cloud service will set this value for us

app.listen(PORT, () => {
    console.log('Express is listening on port: ' + PORT);
});