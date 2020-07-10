var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);