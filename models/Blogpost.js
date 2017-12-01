import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BlogpostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  published: {
    type: Date,
    required: true
  },
  creator: {
    type: String,
    required: true
  }
});

const Blogpost = mongoose.model('Blogpost', BlogpostSchema, 'blogposts');

module.exports = Blogpost;
