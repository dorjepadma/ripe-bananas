const chance = require('chance').Chance();
const Studio = require('../lib/models/studio');


module.exports = async({ studiosToCreate = 5 } = {}) => {
  const studioTypes = ['Propaganda', 'Lion Heart', 'Out West', 'Darkness', 'Rising Sun'];

  const studio = await STudio.create([...Array(studioToCreate)].map(() => ({
    name: ` ${chance.pickone(studioTypes)}`,
    description: chance.sentence({ words: 3 })
  })));