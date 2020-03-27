const mongoose = require ('mongoose');
const filmSchema = new mongoose.Schema({});
module.exports = mongoose.model('Film', filmSchema);
