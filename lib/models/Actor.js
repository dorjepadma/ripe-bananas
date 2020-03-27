const mongoose = require ('mongoose');
const actorSchema = new mongoose.Schema({ name: {
  type: String,
  required: true,
},
DOB: {
  type: String,
  required: true,
},
POB: {
  type: String,
  required: true
},

});
module.exports = mongoose.model('Actor', actorSchema);
