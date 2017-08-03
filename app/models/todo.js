var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    },
    tags: {
        type: Array,
        items: {
            type: String
        },
        default: ''
    }
});