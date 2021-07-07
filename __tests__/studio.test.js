
const request = require('supertest');
const app = require('../lib/app');
const mongoose = require('mongoose');
const { getStudio } = require('../lib/db/data-helpers');

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
  it('gets a  studio by id', async() => {
    const studio = await getStudio();

    return request(app)
      .get(`/api/v1/studios/${studio._id}`)
      .then(res => {
        expect(res.body).toContainEqual(studio);
      });
  });

  it('gets all studios', async() => {
    const studios = await getStudio();

    return request(app)
      .get('/api/v1/studios')
      .then(res => {
        expect(res.body).toContainEqual(studios);
      });
  });
  it('delete a studio by id', async() => {
    const studio = await getStudio();

    return request(app)
      .delete(`/api/v1/studios/${studio._id}`)
      .then(res => {
        expect(res.body).toEqual(studio);
      });
  });
});

