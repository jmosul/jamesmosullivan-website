const dynamoose = require('dynamoose');

const Schema = dynamoose.Schema;

const tableName = process.env.POSTS_TABLE;

const postsSchema = new Schema({
    blog: {
        type: String,
        hashKey: true
    },
    postId: {
        type: String,
        rangeKey: true,
    },
    content: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: [
            'public',
            'private'
        ]
    }
}, {
    timestamps: true
});

module.exports = dynamoose.model(tableName, postsSchema);
