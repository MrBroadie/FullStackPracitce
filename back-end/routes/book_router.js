const Route = require('@koa/router')
const book_controller = require('../controllers/book_controller');

const routing = new Route();

routing.post('/books/users/:user_id', book_controller.create)

routing.get('/books', book_controller.index)

routing.get('/books/:id', book_controller.show)

routing.post('/books', book_controller.create)

routing.put('/books/:id', book_controller.update)

routing.delete('/books/:id', book_controller.destroy)


module.exports = routing;