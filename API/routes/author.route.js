// libro.route.js

const express = require('express');
const app = express();
const AuthorRoutes = express.Router();

// Require Libro model in our routes module
let Author = require('../models/Author');

// Defined store route
AuthorRoutes.route('/add').post(function (req, res) {
  let author = new Author(req.body);
  author.save()
    .then(author => {
      res.status(200).json({'author': 'author has been added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
AuthorRoutes.route('/').get(function (req, res) {
  Author.find(function (err, authors){
    if(err){
      console.log(err);
    }
    else {
      res.json(authors);
    }
  });
});

// Defined edit route
AuthorRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Author.findById(id, function (err, author){
    res.json(author);
  });
});

//  Defined update route
AuthorRoutes.route('/update/:id').post(function (req, res) {
  Author.findById(req.params.id, function(err, author) {
    if (!author)
      res.status(404).send("Record not found");
    else {
      author.AuthorName = req.body.AuthorName;
      author.AuthorNationality = req.body.AuthorNationality;
      author.AuthorBirthDate = req.body.AuthorBirthDate;

      author.save().then(libro => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
AuthorRoutes.route('/delete/:id').get(function (req, res) {
  Author.findByIdAndRemove({_id: req.params.id}, function(err, author){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = AuthorRoutes;
