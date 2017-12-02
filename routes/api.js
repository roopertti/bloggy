import express from 'express';
import moment from 'moment';

module.exports = app => {
  app.get('/api/posts', (req, res) => {
    res.send("posts");
  });
};
