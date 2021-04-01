const express = require('express');
const router = express.Router();
const ctrlArtist = require('../controllers/artist');
const ctrlOthers = require('../controllers/others');

/* Artist Pages */
router.get('/', ctrlArtist.homelist);
router.get('/artist', ctrlArtist.artistInfo);
router.get('/artist/review/new', ctrlArtist.addReview);

/* Other Pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
