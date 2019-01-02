var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var TodoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    created_at: Date,
});
var ContactSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    created_at: Date,
});
TodoSchema.pre('save', function (next) {
    var todo = this;
    // get the current date
    var currentDate = new Date();
 
    // if created_at doesn't exist, add to that field
    if (!todo.created_at) {
        todo.created_at = currentDate;
    }
    next();
});

ContactSchema.pre('save', function (next) {
    var contact = this;
    // get the current date
    var currentDate = new Date();
 
    // if created_at doesn't exist, add to that field
    if (!contact.created_at) {
        contact.created_at = currentDate;
    }
    next();
});

module.exports = mongoose.model('Todo', TodoSchema);
module.exports = mongoose.model('Contact', ContactSchema);