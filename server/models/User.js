const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  description: String,
  email: String,
  username: String,
  password: String,
  avatar: {type: String, default: "http://via.placeholder.com/350x350"},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
