const express = require('express')

const {loginUser, signupUser, getUsers} = require('./Controller/userController')

const router = express.Router()



// Login
router.post('/login', loginUser)

// Signup
router.post('/signup', signupUser)

router.get('/users', getUsers);

module.exports = router
