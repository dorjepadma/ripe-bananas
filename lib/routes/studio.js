const { Router } = require('express');
const Studio = require('../models/Studio');

// eslint-disable-next-line new-cap
module.exports = Router()
  .post('/', (req, res, next) => {
    Studio
      .create(req.body)
      .then(studio => res.send(studio))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Studio
      .find()
      .then(book => res.send(book))
      .catch(next);
  });
  
