// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: true
    },
    tag: {
        type: [],
        required: false
    },
    create_date: {
        type: Date,
        default: Date
    },
    source:{
        type:String,
        required:true
    }
});
// Export Contact model
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}