const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Book = require('../models/book')

router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price
    })
    try {
        const savebook = await book.save();
        res.send(savebook)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        res.send(books)
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(book)
    } catch (error) {
        res.status(400).send(error)

    }
})

router.delete('/:id', async (req, res)=>{
    try {
       const book = await Book.findByIdAndDelete(req.params.id) 
       res.send(book)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;