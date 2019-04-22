const Controller = require('./Controller');
const Post = require('../models/Post');
const uuid = require('uuid');

class PostsController extends Controller {

    store(event, callback) {
        const data = JSON.parse(event.body);

        const post = new this.model({
            blog: 'jamesmosullivan',
            postId: uuid.v1(),
            content: data.content,
            title: data.title,
            status: data.status || 'public'
        });

        post.save((err) => {
            callback(err, {body: JSON.stringify(post)})
        });
    }

    latest(event, callback) {
        const startDate = new Date();

        this.model
            .queryOne(
                {
                    blog: { eq: 'jamesmosullivan' },
                    status: { eq: 'public'}
                }
            )
            .where('createdAt')
            .descending()
            .exec((err, results) => {
                const body = results ? results : [];
                
                const response = {
                    body: JSON.stringify(body)
                };

                callback(err, response);
            })
    }
}

module.exports = new PostsController(Post);
