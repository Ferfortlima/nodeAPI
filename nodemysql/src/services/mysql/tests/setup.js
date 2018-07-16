require('dotenv').config()

const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_TEST_DATABASE
})

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error)

  rejectFunction({ erro: msg })
}

module.exports = { connection, errorHandler }
