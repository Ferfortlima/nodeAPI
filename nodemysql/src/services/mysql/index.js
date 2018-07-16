
const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
})

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)

  rejectFunction({ erro: msg })
}

const categoryModule = require('./categories')({ connection, errorHandler })

module.exports = { categories: () => categoryModule }
