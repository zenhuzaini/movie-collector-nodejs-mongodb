const express = require('express');
const router = express.Router();
const model_comment = require('../models/Comments');

//to get all comments
router.get('/', async (req, res) => {
    try {
        const allcomments = await model_comment.find();
        // res.json(getallcomments);
        res.render('comments/comments', { allcomments });
    } catch (error) {
        res.json({ message: error })
    }
});

//to save comments
router.post('/', async (req, res) => {
    const comment = new model_comment({
        idmovie: req.body.idmovie,
        comments: req.body.comment
    });

    try {
        const savecomment = await comment.save();
        // res.json(savecomment);
        res.redirect('/movies/' + req.body.idmovie);

    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;
