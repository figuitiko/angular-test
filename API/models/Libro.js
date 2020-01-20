const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Author } = require('./Author');

// Define collection and schema for Product
let Libro = new Schema({
  LibroName: {
    type: String
  },
  LibroEditorial: {
    type: String
  },
  LibroIdiom: {
    type: String
  },
  LibroDescription: {
    type: String
  },
  LibroAuthor: {
    type: String
  }
},{
  collection: 'Libro'
});

module.exports = mongoose.model('Libro', Libro);
