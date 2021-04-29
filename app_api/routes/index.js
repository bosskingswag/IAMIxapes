const express = require ('express');
const router = express.Router();
const ctrlArtists = require('../controllers/artists');
const ctrlReviews = require('../controllers/reviews');

//Artists
router
    .route('/artists')
    .post(ctrlArtists.artistsCreate);

router
    .route('/artists/:artistid')
    .get(ctrlArtists.artistsReadOne)
    .put(ctrlArtists.artistsUpdateOne)
    .delete(ctrlArtists.artistsDeleteOne);

//Reviews
router
    .route('/artists/:artistid/review')
    .post(ctrlReviews.reviewsCreate);

router
    .route('/artists/:artistid/reviews/:reviewid')
    .get(ctrlReviews.reviewsReadOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;