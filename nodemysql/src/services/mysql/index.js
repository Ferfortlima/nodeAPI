
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: 'mysql556.umbler.com',
  port: 41890,
  user: 'fortlima',
  password: 'fortlima1702',
  database: 'testeapi'
})

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)

  rejectFunction({ erro: msg })
}

const categoryModule = require('./categories')({ connection, errorHandler })

module.exports = { categories: () => categoryModule }
