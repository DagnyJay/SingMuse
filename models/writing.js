const mongoose = require('mongoose');

const writingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    randomWords: String,
    content: String
});

module.exports = mongoose.model('Writing', writingSchema);