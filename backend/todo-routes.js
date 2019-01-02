var express = require('express');

var app = module.exports = express.Router();

var Todo = require('./todo');
var Contact = require('./todo');

// POST
// Create a new Todo
/*
app.post('/todos', function (req, res) {
  if (!req.body.text) {
    return res.status(400).send({ "success": false, "msg": "You need to send the text of the todo!" });
  }

  var newTodo = new Todo({
    text: req.body.text
  });

  newTodo.save(function (err) {
    if (err) {
      console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating Todo", "error": err });
    }
    res.status(201).send({ "success": true, "msg": 'Successful created new Todo.' });
  });
});
*/
app.post('/api/contact', function (req, res) {
  if (!req.body.owner) {
    return res.status(400).send({ "success": false, "msg": "You need to send the text of the todo!" });
  }

  var contact = new Contact({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    address: req.body.address,
    service: req.body.service,
    owner: req.body.owner
  });

  contact.save(function (err) {
    if (err) {
      console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Erreur lors de la creation d'un nouveau contact", "error": err });
    }
    res.status(201).send({ "success": true, "msg": 'Un nouveau contact est ajoute.' });
  });
});
// GET
// Get all open Todos
app.get('/api/contact', function (req, res) {
    Contact.find({}, function (err, contacts) {
    if (err) {
      return res.json({ "success": false, "msg": "Erreur lors de selection des contactss", "error": err });
    }

    res.status(200).send({ "success": true, "result": contacts });
  });
});
//get by id

app.get('/api/contact/:contactId', function (req, res) {
  var contactId = req.params.contactId;
  Contact.findOne({'_id': contactId}, function (err, contacts) {
  if (err) {
    return res.json({ "success": false, "msg": "Erreur lors de selection des contactss", "error": err });
  }

  res.status(200).send({ "success": true, "result": contacts });
});
});


/*
app.get('/todos', function (req, res) {
  Todo.find({}, function (err, todos) {
    if (err) {
      return res.json({ "success": false, "msg": "Error while creating Todo", "error": err });
    }

    res.status(200).send({ "success": true, "result": todos });
  });
});
*/
// DELETE
// Remove one todo by its ID

/*
app.delete('/todos/:todoId', function (req, res) {
  var lectionId = req.params.todoId;
  if (!lectionId || lectionId === "") {
    return res.json({ "success": false, "msg": "You need to send the ID of the Todo", "error": err });
  }

  Todo.findByIdAndRemove(lectionId, function (err, removed) {
    if (err) {
      return res.json({ "success": false, "msg": "Error while deleting Todo", "error": err });
    }
    res.status(200).json({ "success": true, "msg": "Todo deleted" });
  });
});
*/

app.delete('/api/contact/:contactId', function (req, res) {
  var contactId = req.params.contactId;
  if (!contactId || contactId === "") {
    return res.json({ "success": false, "msg": "Vous deverez envoyer ID du contact", "error": err });
  }

  Contact.findByIdAndRemove(contactId, function (err, removed) {
    if (err) {
      return res.json({ "success": false, "msg": "Erreur lors de la suppression du contact", "error": err });
    }
    res.status(200).json({ "success": true, "msg": "Contact est supprimer" });
  });
});

// UPDATE
/*
app.put('/todos', function (req, res) {
  if (!req.body.text) {
    return res.status(400).send({ "success": false, "msg": "You need to send the text of the todo!" });
  }
  Todo.findByIdAndUpdate(req.body._id, { $set: req.body }, function (err, p) {
    if (err) return res.json({ "success": false, "msg": "Error while Updating Todo", "error": err });
    res.status(200).json({ "success": true, "msg": "Todo Updated" });
  });
});
*/
app.put('/api/contact', function (req, res) {
  if (!req.body.owner) {
    return res.status(400).send({ "success": false, "msg": "Vous deverez envoyer les infos du contact!" });
  }
  Contact.findByIdAndUpdate(req.body._id, { $set: req.body }, function (err, p) {
    if (err) return res.json({ "success": false, "msg": "Erreur lors de la modification du contact", "error": err });
    res.status(200).json({ "success": true, "msg": "Contact est modifie" });
  });
});