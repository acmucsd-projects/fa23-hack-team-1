const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        minLength: 3,
        required: true
    },
    important: Boolean,
})

// const Note = mongoose.model('Note', noteSchema);
// module.exports = Note;

module.exports = mongoose.model('Note', noteSchema)
