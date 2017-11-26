import express from 'express';
const router = express.Router();

// MODELS
import Model from '../models/Model';

// DEFINE API ROUTES HERE
router.get('/greeting', (req, res) => {
  res.send("Greetings");
});

module.exports = router;
