const mongoose = require('mongoose');

const writingSchema = new mongoose.Schema({
    title: String,
    randomWords: String,
    content: String
});

module.exports = mongoose.model('Writing', writingSchema);