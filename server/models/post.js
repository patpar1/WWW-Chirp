const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: Array,
    replies: Array,
    parent: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);