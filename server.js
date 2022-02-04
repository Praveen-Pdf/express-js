const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))


const productRoute = require('./api/v1/route/productsRouter')

app.use('', productRoute)

app.listen(8000, () =>{
	console.log('Running')
})