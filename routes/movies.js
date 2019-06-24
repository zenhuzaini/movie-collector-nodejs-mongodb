const express = require('express');
const request = require('request');
const router = express.Router();

const model_movies = require('../models/Movies');
const model_comments = require('../models/Comments');

require('dotenv/config');

//to retrieve all saved movies
router.get('/', async (req, res) => {
    try {
        const mymovies = await model_movies.find();
        // res.json(mymovies);
        res.render('movies/home', { mymovies });
    } catch (error) {
        res.json({ message: error });
    }
});

//to get specific movies
router.get('/:idmovie', async (req, res) => {
    try {
        const onemovie = await model_movies.findOne({ idmovie: req.params.idmovie });
        const specificcomment = await model_comments.find({ idmovie: req.params.idmovie });
        // res.json(onemovie);
        res.render('movies/one_movie', { onemovie, specificcomment });
    } catch (error) {
        res.json({ message: error });
    }
});

//to serach movies form OMDBAPI
router.get('/api/search', async (req, res) => {
    const url = await 'https://www.omdbapi.com/?s=' + req.query.search + '&apikey=' + process.env.APIOMDB;
    request(url, (err, requestresponse, body) => {
        try {
            const results = JSON.parse(body);
            // res.json(results);
            res.render('movies/movies_results', { results });
            console.log(results);
        } catch (err) {
            console.log(err);
        }
    });
});

//to save specific movie to database from OMDBAPI
router.post('/', async (req, res) => {
    const movies = new model_movies({
        idmovie: req.body.idmovie,
        title: req.body.title,
        year: req.body.year,
        imdbLink: req.body.imdbLink,
        type: req.body.type,
        posterLink: req.body.posterLink
    });

    try {
        const savedMovies = await movies.save();
        //res.json(savedMovies);
        res.redirect('/');
    } catch (error) {
        res.json({ message: error });
    }

});

module.exports = router;

