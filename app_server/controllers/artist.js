/* GET homepage */
const homelist = (req, res) => {
    res.render('artist-list', {title: 'Home'});
};
/* GET 'Artist Information' Page */
const artistInfo = (req, res) => {
    res.render('artist-info', {title: 'Artist Information'});
};
/* Get 'Add Review' Page */
const addReview = (req, res) => {
    res.render('artist-review-form', {title: 'Add Review'});
};


module.exports = {
    homelist,
    artistInfo,
    addReview
};