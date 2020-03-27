const { getStudio } = require('../lib/db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');

describe('film routes', () => {
  it('creates a film', async() => {
    const studio = await getStudio();

    return request(app)
      .post('/api/v1/films')
      .send({
        title: 'The Great Corona Scare',
        released: '12/17/2019',
        studioId: studio._id
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'The Great Corona Scare',
          released: '12/17/2019',
          studioId: studio._id,
          __v: 0
        });
      });
  });
});
