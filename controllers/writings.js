const Writing = require('../models/writing');

module.exports = {
    create
};

async function create(req, res) {
    req.body.user = req.user._id;
    try{
        const writing = await Writing.create(req.body);
        res.status(201).json(writing);
    }
    catch(err){
        res.status(500).json(err);
    }
}