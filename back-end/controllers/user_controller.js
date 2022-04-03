const User = require('../models/user.js')

//get all books index
async function index (ctx) {
  try {
    const users = await User.find()
    ctx.body = users
  } catch (e) {
    console.error(e)
    ctx.status = 500
  }
}

//get one book show
async function show (ctx) {
  try {
    const user = await User.findById(ctx.params.id)
    ctx.body = user
  } catch (e) {
    console.error(e)
    ctx.status = 500
  }
}

//create one book create
async function create (ctx) {
  try {
    //destructure for security --> instead just ctx.request.body which could be full of harmful data
    const { userName } = ctx.request.body //when post request is sent it needs these 2 variables from models
    const user = await User.create({ userName })
    ctx.body = user
  } catch (e) {
    console.error(e)
    ctx.status = 500
  }
}

//updates one book update
async function update (ctx) {
  try {
    const id = ctx.params.id
    const { userName, books } = ctx.request.body
    //upadates book and returns old book
    await User.findByIdAndUpdate(id, { userName, books })
    //find updated book
    const user = await User.findById(id)
    //return book
    ctx.body = user
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
    const user = await User.findByIdAndDelete(id)
    ctx.body = user
  } catch (e) {
    console.error(e)
    ctx.status = 500
  }
}

module.exports = { index, show, destroy, update, create };