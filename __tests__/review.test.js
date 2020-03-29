const { getReviewer,
  getFilm,
} = require('../lib/db/data-helpers');
const request = require('supertest');
const app = require('../lib/app');


describe('review routes', () => {
  it('creates a review', async() => {
    const reviewer = await getReviewer();
    const film = await getFilm();
    return request(app)
      .post('/api/v1/review')
      .send({
        rating: 5,
        reviewer: reviewer._id,
        review: 'The entire world should watch this.',
        film: film._id
      })

      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          rating: 5,
          reviewer: reviewer._id,
          review: 'The entire world should watch this.',
          film: film._id,
          __v: 0
        });
      });
  });
});
