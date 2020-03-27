const { Router } = require('express');
const Reviewer = require('../models/Reviewer');

// eslint-disable-next-line new-cap
module.exports = Router()
  .post('/', (req, res, next) => {
    Reviewer
      .create(req.body)
      .then(reviewer => res.send(reviewer))
      .catch(next);
  });

// .delete('/:id', (req, res, next) => {
//   Reviewer
//     .findByIdAndDelete(req.params.id)
//     .then(reviewers => res.send(reviewers))
//     .catch(next);
// });

