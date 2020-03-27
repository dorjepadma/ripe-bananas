const chance = require('chance').Chance();
const Studio = require('../models/Studio');


module.exports = async({ studiosToCreate = 5 } = {}) => {
  const studioTypes = ['Propaganda', 'Lion Heart', 'Out West', 'Darkness', 'Rising Sun'];

  await Studio.create([...Array(studiosToCreate)].map(() => ({
    name: ` ${chance.pickone(studioTypes)}`,
    address: {
      city: chance.city(),
      state: chance.state(), 
      country: chance.country()
    }
  })));
};
