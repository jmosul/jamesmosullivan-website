const Controller = require('./Controller');
const Post = require('../models/Post');
const uuid = require('uuid');

class PostsController extends Controller {

    store(event, callback) {
        const data = JSON.parse(event.body);

        const post = new this.model({
            pageId: uuid.v1(),
            content: data.content
        });

        post.save((err) => {
            callback(err, {body: JSON.stringify(post)})
        });
    }
}

module.exports = new PostsController(Post);
