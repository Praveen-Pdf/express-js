const sqlite3 = require('sqlite3').verbose()
const md5 = require('md5')

const db = new sqlite3.Database(':express:', (e) => {
	if(e) {
		console.log(e.message)
		throw e
	} else {
		console.log('Connected to DB')
	}
})


// User DB

const usersTable = `CREATE TABLE IF NOT EXISTS User (
						id INTEGER PRIMARY KEY AUTOINCREMENT,
						name VARCHAR(100),
						email VARCHAR(200) NOT NULL,
						password VARCHAR(200) NOT NULL
						);`

// Users Seed

const usersSeed = `INSERT INTO User (name, email, password) 
					VALUES ( 'User-1', 'user-1@mail.com', "${md5('Password-1')}"),
							( 'User-2', 'user-2@mail.com', "${md5('Password-1')}"),
							( 'User-3', 'user-3@mail.com', "${md5('Password-1')}")`

db.run(usersTable, e => {
	if (e) {
		return console.error(e.message)
	} else {
		console.log('Success of User table creation')
	}
})

db.run(usersSeed, e=> {
	if(e){
		console.log(e.message)
	} else {
		console.log('Successful Seed')
	}
})


module.exports = db