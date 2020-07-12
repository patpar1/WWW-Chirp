const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: Array,
    replies: Array,
    replyingTo: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);