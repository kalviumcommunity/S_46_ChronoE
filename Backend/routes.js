const express = require('express')
const {
       createTheory,
       getTheories,
       deleteTheory,
       updateTheory
} = require("./Controller/theoryController")


const router = express.Router()

router.get('/', getTheories)

router.post('/', createTheory)

router.delete('/:id', deleteTheory)

router.patch('/:id', updateTheory)

module.exports = router
