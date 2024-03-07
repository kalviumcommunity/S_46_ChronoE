const express = require('express')
const {
       createTheory,
       getTheories,
       deleteTheory,
       updateTheory,
       getTheory,
} = require("./Controller/theoryController")
const requireAuth  = require('./middleware/requireAuth.jsx')

const router = express.Router()

router.use(requireAuth)

router.get('/', getTheories)

router.get('/:id', getTheory)

router.post('/', createTheory)

router.delete('/:id', deleteTheory)

router.put('/:id', updateTheory)




module.exports = router
