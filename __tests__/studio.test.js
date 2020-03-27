// const Studio = require('../lib/routes/studio');

const request = require('supertest');
const app = require('../lib/app');
const mongoose = require('mongoose');
require('../lib/db/data-helpers');

describe('studio routes', () => {
  it('creates a studio', () => {
    
    return request(app)
      .post('/api/v1/studios')
      .send({
        name: 'Propaganda R Us',
        address: 
          { _id: expect.any(mongoose.Types.ObjectId),
            city: 'Seattle',
            state: 'Washington',
            country: 'USA'
          },
      })
      .then(res => {
        expect(res.body).toEqual({
          __v: 0,
          _id: expect.any(String),
          name: 'Propaganda R Us',
          address: 
            {
              city: 'Seattle',
              state: 'Washington',
              country: 'USA',
            }
        });
      });
  });
});
