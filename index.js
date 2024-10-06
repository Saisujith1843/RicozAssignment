const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Ricoz')
const userRouter = require('./src/routers/userRouter')

app.use(express.json())
app.use('/',userRouter)
app.listen(3500, ()=> console.log('started'))