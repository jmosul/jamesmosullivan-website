const dynamoose = require('dynamoose');

const Schema = dynamoose.Schema;

const postsSchema = new Schema({
    pageId: {
       type: String,
       hashKey: true
   },
    content: {
       type: String
    }
}, {
    timestamps: true
});

module.exports = dynamoose.model('posts', postsSchema);
