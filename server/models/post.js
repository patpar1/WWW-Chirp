const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: Array,
    replies: Array,
    replyingTo: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);