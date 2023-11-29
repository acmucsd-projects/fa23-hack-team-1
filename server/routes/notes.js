const express = require('express')
const router = express.Router()

const Note = require('../models/notes')

/* GET notes listing. */
router.get('/', async(req, res) => {
    try {
        // const data = await Note.find({})
        // res.json(data)
        res.send('hello')
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.post('/', async(req, res) => {
    const note = new Note({
        content: req.body.content,
        important: req.body.important
    })
    try {
        const newNote = await note.save()
        res.status(201).json(newNote)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
})

module.exports = router;
