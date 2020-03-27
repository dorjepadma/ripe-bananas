const mongoose = require ('mongoose');
const reviewerSchema = new mongoose.Schema({});
module.exports = mongoose.model('Reviewer', reviewerSchema);
