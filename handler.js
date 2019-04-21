const postsController = require('./api/controllers/PostsController');

module.exports = {
    posts_index: (event, context, callback) => postsController.index(event, callback),
    posts_store: (event, context, callback) => postsController.store(event, callback),
};
