const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {type: Date, default: Date.now}
});
const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    album: String,
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    reviews: [reviewSchema]
});
mongoose.model('Artist',artistSchema)
