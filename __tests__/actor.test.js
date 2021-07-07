const request = require('supertest');
const app = require('../lib/app');
const { getActor } = require('../lib/db/data-helpers');

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
  it('gets an actor by id', async() => {
    const actor = await getActor();

    return request(app)
      .get(`/api/v1/actors/${actor._id}`)
      .then(res => {
        expect(res.body).toContainEqual(actor);
      });
  });

  it('gets all actors', async() => {
    const actors = await getActor();

    return request(app)
      .get('/api/v1/actors')
      .then(res => {
        expect(res.body).toContainEqual(actors);
      });
  });

  it('deletes a actor by id', async() => {
    const actor = await getActor();

    return request(app)
      .delete(`/api/v1/actors/${actor._id}`)
      .then(res => {
        expect(res.body).toEqual(actor);
      });
  });
});

