const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
  url: String,
  username: String,
  password: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Password', passwordSchema);



// Using new Schema directly===========================================


// const passwordSchema = new Schema({
//   url: String,
//   username: String,
//   password: String
// });

// module.exports = model('Password', passwordSchema);

