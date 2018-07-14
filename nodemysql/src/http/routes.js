
const categories = require('../services/mysql')

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('testando o getddd')
    next()
  })

  server.get('/categoria', (req, res, next) => {
    categories
      .then((categories) => {
        res.send(categories)
        next()
      })
      .catch((error) => {
        res.send(error)
        next()
      })
  })

  server.post('/categoria', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })

  // server.put('/categoria', (req, res, next) => {
  //   res.send()
  //   next()
  // })

  // server.delete('/categoria', (req, res, next) => {
  //   res.send()
  //   next()
  // })
}

module.exports = routes