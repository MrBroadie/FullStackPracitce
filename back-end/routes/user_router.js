const Route = require('@koa/router')
const user_controller = require('../controllers/user_controller');

const routing = new Route();

routing.get('/users', user_controller.index)

routing.get('/users/:id', user_controller.show)

routing.post('/users', user_controller.create)

routing.put('/users/:id', user_controller.update)

routing.delete('/users/:id', user_controller.destroy)



module.exports = routing;