import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  pass: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;
