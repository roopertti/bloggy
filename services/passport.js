import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import config from '../config/config';
import mongoose from 'mongoose';

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientID,
      clientSecret: config.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({googleID: profile.id});
      if(existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        googleID: profile.id,
        givenName: profile.name.givenName,
        familyName: profile.name.familyName
      }).save();

      done(null, user);
    }
  )
);
