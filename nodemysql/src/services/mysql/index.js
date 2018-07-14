
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'mysql556.umbler.com',
  port: 41890,
  user: 'fortlima',
  password: 'fortlima1702',
  database: 'testeapi'
})

const categories = new Promise((resolve, reject) => {
  connection.query('SELECT * FROM categories', (error, results) => {
    if (error) { reject(error) }

    resolve({ categories: results })
  })
})

module.exports = categories
