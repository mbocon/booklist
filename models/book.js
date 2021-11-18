// require dependencies
const monogoose = require('mongoose');
const Schema = monogoose.Schema;

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
module.exports = monogoose.model('Book', bookSchema);