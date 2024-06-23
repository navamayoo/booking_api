const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: false, unique: true },
  password: { type: String, required: false },
  email: { type: String, required: false, unique: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  gender: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  address: { type: String, required: false },
  city: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);