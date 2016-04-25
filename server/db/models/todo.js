'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');

var schema = new mongoose.Schema({
    text: {
        type: String
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    date_created: {
        type: Date
    },
    completed: {
        type: Boolean,
        default: false
    },
    timed_out: {
        type: Boolean,
        default: false
    }
});


mongoose.model('Todo', schema);