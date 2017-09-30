const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const EventSchema = new Schema({
  lat: Number,
  lon: Number,
  name: String,
  avatar: String,
  description: String,
  contact: String,
  day: Date,
  user_id:String,
  user_name: String,
  user_avatar:String
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

module.exports = mongoose.model('Product', ProductSchema);
