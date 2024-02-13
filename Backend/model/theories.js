const mongoose = require('mongoose')

const schema = mongoose.Schema


const theorySchema = new schema({
    theoryDetails:{
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Theorie', theorySchema)



