const Book = require('../models/book.js')

//get all books index
async function index (ctx) {
  try {
    const books = await Book.find()
    ctx.body = books
  } catch (e) {
    console.error(e)
    ctx.status = 500
  }
}

//get one book show
async function show (ctx) {
  try {
    const book = await Book.findById(ctx.params.id)
    ctx.body = book
  } catch (e) {
    console.error(e)
    ctx.status = 500
  }
}

//create one book create
async function create (ctx) {
  try {
    //destructure for security --> instead just ctx.request.body which could be full of harmful data
    const { title, author, price } = ctx.request.body //when post request is sent it needs these 3 variables 
    const book = await Book.create({ title, author, price })
    ctx.body = book
  } catch (e) {
    console.error(e)
    ctx.status = 500
  }
}

//updates one book update
async function update (ctx) {
  try {
    const id = ctx.params.id
    const { title, author, price } = ctx.request.body
    //upadates book and returns old book
    await Book.findByIdAndUpdate(id, { title, author, price })
    //find updated book
    const book = await Book.findById(id)
    //return book
    ctx.body = book
  } catch (e) {
    console.error(e)
    ctx.status = 500
  }
}

//deletes one book destroy
async function destroy (ctx) {
  try {
    const id = ctx.params.id
    //delete returns the deleted book
    const book = await Book.findByIdAndDelete(id)
    ctx.body = book
  } catch (e) {
    console.error(e)
    ctx.status = 500
  }
}

module.exports = { index, show, destroy, update, create };