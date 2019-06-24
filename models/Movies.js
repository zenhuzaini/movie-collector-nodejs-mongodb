const mongoose = require('mongoose');
const MovieSchema = mongoose.Schema({
    idmovie: {
        type: String,
        required: true
    },
    title: String,
    year: Number,
    imdbLink: String,
    type: String,
    posterLink: String
});

module.exports = mongoose.model('movies', MovieSchema);