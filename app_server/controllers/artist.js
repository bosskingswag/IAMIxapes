/* GET homepage */
const homelist = (req, res) => {
    res.render('index', {title: 'Home'});
};
/* GET 'Artist Information' Page */
const artistInfo = (req, res) => {
    res.render('index', {title: 'Artist Information'});
};
/* Get 'Add Review' Page */
const addReview = (req, res) => {
    res.render('index', {title: 'Add Review'});
};
module.exports = {
    homelist,
    artistInfo,
    addReview
};