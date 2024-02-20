const express = require('express')
const {
       createTheory,
       getTheories,
       deleteTheory,
       updateTheory,
       getTheory
} = require("./Controller/theoryController")


const router = express.Router()

router.get('/', getTheories)

router.get('/:id', getTheory)

router.post('/', createTheory)

router.delete('/:id', deleteTheory)

router.put('/:id', updateTheory)

module.exports = router
