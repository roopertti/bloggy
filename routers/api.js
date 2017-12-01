import express from 'express';
import moment from 'moment';
const router = express.Router();

// MODELS
import Blogpost from '../models/Blogpost';

// DEFINE API ROUTES HERE
router.get('/greeting', (req, res) => {
  res.send("Greetings");
});

router.get('/blogposts', async (req, res) => {
  try {

    const posts = await Blogpost.find({});
    if(posts.length > 0)
      throw new Error("No blogposts found");

    res.send({
      error: false,
      posts: posts
    });

  } catch(err) {
    res.send({
      error: true,
      msg: err.message
    });
  }
});

router.post('/createBlogpost', (req, res) => {
  // TODO bloginpostauksen luominen
})

module.exports = router;
