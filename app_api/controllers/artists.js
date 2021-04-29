const mongoose = require('mongoose');
const Art = mongoose.model('Artist');

const artistsCreate = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"})
};

const artistsReadOne = (req, res) => {
    Art
        .findById(req.params.artistid)
        .exec((err, artist) => {
            res
                .status(200)
                .json(artist)
        });
}

const artistsUpdateOne = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"})
};

const artistsDeleteOne = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"})
};


module.exports = {
    artistsCreate,
    artistsReadOne,
    artistsUpdateOne,
    artistsDeleteOne
};