const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))


const db = require('./config/db')

const userRoute = require('./api/v1/route/userRoute')

app.use(userRoute)
app.use('', userRoute)

app.listen(8000, () =>{
	console.log('Running')
})