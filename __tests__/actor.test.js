const request = require('supertest');
const app = require('../lib/app');
require('../lib/db/data-helpers');

describe('actor routes', () => {
  it('creates an actor', () => {
    
    return request(app)
      .post('/api/v1/actors')
      .send({
        name: 'Jessie Big Grin',
        dob: '12/4/71',
        pob: 'Chautauqua, Tennessee'
      },
      )
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          name: 'Jessie Big Grin',
          dob: '12/4/71',
          pob: 'Chautauqua, Tennessee'
        });
      });
  });
});
