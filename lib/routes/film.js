const { Router } = require('express');
const Films = require('../models/Film');

// eslint-disable-next-line new-cap
module.exports = Router()
  .post('/', (req, res, next) => {
    Films
      .create(req.body)
      .then(film => res.send(film))
      .catch(next);
  });
