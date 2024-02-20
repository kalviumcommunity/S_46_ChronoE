const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const theorySchema = new Schema({
    theoryDetails: {
        type: String,
        required: true 
    }
}, {timestamps: true});

module.exports = mongoose.model('Theory', theorySchema);
