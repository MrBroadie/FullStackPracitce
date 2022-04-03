const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const mongoose = require('mongoose')

const books_router = require('./routes/book_router.js')
const user_router = require('./routes/user_router.js')

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(books_router.routes())
app.use(user_router.routes())

app.listen(3000, async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/books') 
    console.log('Server is in, http://localhost:3000')
  } catch(e) {
    console.error(e)
  }
})