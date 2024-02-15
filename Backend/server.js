const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const theoryRoute = require('./routes')
const cors = require('cors')



const app = express()
app.use(express.json())

app.use(
    cors({
        origin: "http://localhost:5173"
    })
)

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/theories', theoryRoute)

mongoose.connect(process.env.mongoUri)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log(`Connected to db & Api is running on port`, process.env.PORT)
        })
    }).catch((error)=>{
        console.log(error)
    })


