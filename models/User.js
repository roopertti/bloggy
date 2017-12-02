import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleID: {
    type: String,
    unique: true,
    required: true
  },
  givenName: {
    type: String,
    required: true
  },
  familyName: {
    type: String,
    required: true
  }
});

const User = mongoose.model('users', UserSchema);
