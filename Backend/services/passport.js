import {Strategy as GoogleStrategy } from 'passport-google-oauth20';
import {Google} from '../models/google.js';
import dotenv from 'dotenv';

dotenv.config();

export default (passport) => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: '/auth/google/callback'
            },
            async (accessToken, refreshToken, profile, done) => {
                const {id, displayName, emails} = profile;
                const email = emails[0].value;

                try {
                    let user = await Google.findOne({ googleId:id});
                    if(user) {
                        done(null,user);
                    }
                    else
                    {
                        user = new Google({googleId:id, name:displayName,email});
                        await user.save();
                        done(null,user);
                    }
                }
                catch(err)  {
                    console.error(err);
                    done(err,null);
                }
            }
        )
    );

    passport.serializeUser((user,done) => {
        done(null,user.id);
    });

    passport.deserializeUser((id,done) => {
        Google.findById(id, (err,user) => done(err,user));
    });
};