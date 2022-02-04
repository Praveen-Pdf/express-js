const express = require('express')
const router = express.Router()
const db = require('../../../config/db')


router.get('/', (req, res) => {
	res.send('User Page')
})

router.get('/users', (req, res) => {

	const sql = `SELECT * FROM User ORDER BY id`

	db.all(sql, [], (e, rows) => {
		if(e){
			console.log(e.message)
		}
		res.status(200).json({
			data: rows
		})
	})

})

module.exports = router