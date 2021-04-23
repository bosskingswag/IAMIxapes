/* GET homepage */
const homelist = (req, res) => {
    res.render('artist-list',
        {
        title: 'IAMixtapes',
        pageHeader: {
            title: 'IAMixtapes',
            strapLine: 'Glory to the King'
        },
        artists: [{
            name: 'Artist 1',
            address: 'address 1 street block 4',
            rating: 5,
        },{
            name: 'Artist 2',
            address: 'address 432 street block 2',
            rating: 1,
        },{
            name: 'Artist 23',
            address: 'address 942 street block 24', 
            rating: 3,
        }]
    });
};

/* GET 'Artist Information' Page */
const artistInfo = (req, res) => {
    res.render('artist-info', {
        title: 'Artist Information',
        pageHeader: {title: 'Artist information'},
        sidebar: {
            context: 'Praises to the Most High'
        },
        artist: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,

            reviews: [
                {
                    author: 'Simon Holmes',
                    rating: 5,
                    timestamp: '16 July 2013',
                    reviewText: 'Most federal rapper I have ever heard in my life'
                },
                {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'So Lyrical my head almost exploded'
                }]

            }
        }
    );
};
/* Get 'Add Review' Page */
const addReview = (req, res) => {
    res.render('artist-review-form', { title: 'Add Review'});
};


module.exports = {
    homelist,
    artistInfo,
    addReview
};