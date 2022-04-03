const Book = require('./book.js')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  userName: String,
  books: {
    //type and default keywords in mongoose defines default property and then defined property if they exist
    type: [Book.schema],  //also vaid to just called the id inside an object here
    default: [] 
  }
})

const User = mongoose.model('user', userSchema);

module.exports = User