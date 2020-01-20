const mongoose = require('mongoose');
const Author = mongoose.Schema({
  AuthorName: {
    type: String,
  },
  AuthorNationality: {
    type: String
  },
  AuthorBirthDate: {
    type: String
  },
  books: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Libro' }
  ]
}, {
  collection: 'Author'
});
module.exports = mongoose.model('Author', Author);
