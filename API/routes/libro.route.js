// libro.route.js

const express = require('express');
const app = express();
const libroRoutes = express.Router();

// Require Libro model in our routes module
let Libro = require('../models/Libro');

// Defined store route
libroRoutes.route('/add').post(function (req, res) {
  let libro = new Libro(req.body);
  libro.save()
    .then(libro => {
      res.status(200).json({'Libro': 'Libro has been added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
libroRoutes.route('/').get(function (req, res) {
  Libro.find(function (err, libros){
    if(err){
      console.log(err);
    }
    else {
      res.json(libros);
    }
  });
});

// Defined edit route
libroRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Libro.findById(id, function (err, libro){
    res.json(libro);
  });
});

//  Defined update route
libroRoutes.route('/update/:id').post(function (req, res) {
  Libro.findById(req.params.id, function(err, libro) {
    if (!libro)
      res.status(404).send("Record not found");
    else {
      libro.LibroName = req.body.LibroName;
      libro.LibroEditorial = req.body.LibroEditorial;
      libro.LibroIdiom = req.body.LibroIdiom
      libro.LibroAuthor = req.body.LibroAuthor;
      libro.LibroDescription = req.body.LibroDescription;

      libro.save().then(libro => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
libroRoutes.route('/delete/:id').get(function (req, res) {
  Libro.findByIdAndRemove({_id: req.params.id}, function(err, libro){
    if(err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = libroRoutes;
