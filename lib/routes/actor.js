const { Router } = require('express');
const Actor = require('../models/Actor');

// eslint-disable-next-line new-cap
module.exports = Router()
  .post('/', (req, res, next) => {
    Actor
      .create(req.body)
      .then(actor => res.send(actor))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Actor
      .find()
      .then(actor => res.send(actor))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Actor
      .find()
      .then(actor => res.send(actor))
      .catch(next);
  })
  
  .delete('/:id', (req, res, next) => {
    Actor
      .findByIdAndDelete(req.params.id)
      .then(actor => res.send(actor))
      .catch(next);
  });
