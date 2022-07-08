// require dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    completed: Boolean,
}, {
    timestamps: true
});

// export model
module.exports = mongoose.model('Book', bookSchema);