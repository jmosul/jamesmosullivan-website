const postsController = require('./api/controllers/PostsController');

// run local db on sls offline
if(process.env.IS_OFFLINE) {
    const dynamoose = require('dynamoose');

    dynamoose.local();
}

module.exports = {
    posts_index: (event, context, callback) => postsController.index(event, callback),
    posts_store: (event, context, callback) => postsController.store(event, callback),
    posts_latest: (event, context, callback) => postsController.latest(event, callback),
};
