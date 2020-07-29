const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Mongo DB schema for storing posts.
const PostSchema = new Schema({
    // Author name
    name: {
        type: String,
        required: true
    },

    // Content
    content: {
        type: String,
        required: true
    },

    // Empty array, which is initialized on client side
    replies: Array,

    // If this post is a comment to another post, we are storing
    // the parent id for nesting posts on client application.
    parent: {
        type: String,
        default: null
    }
}, {
    // Stores the timestamps for instance creation
    timestamps: true
});

// Export the database model
module.exports = mongoose.model('Post', PostSchema);