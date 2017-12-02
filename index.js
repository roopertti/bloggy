import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
require('./models/User');
require('./services/passport');

// CONFIG
import config from './config/config';

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [config.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// BODYPARSER MIDDLEWARE
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// MONGODB SETUP
mongoose.connect(config.mongoURI);
mongoose.Promise = global.Promise;

// ROUTES
require('./routes/auth')(app);
require('./routes/api')(app);
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
