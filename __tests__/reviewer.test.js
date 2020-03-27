const request = require('supertest');
const app = require('../lib/app');
const mongoose = require('mongoose');
const { getReviewer } = require('../lib/db/data-helpers');

describe('reviewer routes', () => {
  it('creates an reviewer', () => {
    
    return request(app)
      .post('/api/v1/reviewers')
      .send({
        name: 'Freddy Grumpy',
        company: 'Portland Ripe Bananas'
      },
      )
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          name: 'Freddy Grumpy',
          company: 'Portland Ripe Bananas'
        });
      });
  });

  // it('deletes a reviewer by id', async() => {
  //   const reviewer = await getReviewer();
    
  //   return request(app)
  //     .delete(`/api/v1/reviewer/${reviewer._id}`)
  //     .then(res => {
  //       expect(res.body).toEqual(reviewer);
     
  //     });
  // });
});
