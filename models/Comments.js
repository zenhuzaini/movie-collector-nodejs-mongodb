const mongoose = require('mongoose');
const commentSchema = mongoose.Schema({
    idmovie: {
        type: String,
        required: true
    },
    user: String,
    comments: String
});

module.exports = mongoose.model('comments', commentSchema);