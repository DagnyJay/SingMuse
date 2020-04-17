const Writing = require('../models/writing');

module.exports = {
    create,
    index, 
    show
};

async function index(req, res) {
    try{
        const writings = await Writing.find({user: req.user._id}).populate('user');
        console.log(writings);
        res.status(200).json(writings);
    }
    catch(err){
        res.status(500).json(err);
    }
}

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

async function show(req, res) {
    try{
        const writing = await (await Writing.findById(req.params.id)).populated('user');
        res.status(200).json(writing);
    }
    catch(err){
        res.status(500).json(err);
    }
}