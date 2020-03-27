const mongoose = require ('mongoose');
const actorSchema = new mongoose.Schema({});
module.exports = mongoose.model('Actor', actorSchema);
