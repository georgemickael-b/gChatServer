import passportGoogleOAuth from 'passport-google-oauth'
import User from "../models/user.model"
var GoogleStrategy = passportGoogleOAuth.OAuth2Strategy;
import ioCon from "./io.config"

class Auth {
    passport
    constructor() {
    }

    configPassportGoogleAuth(passport, app) {
        this.passport = passport;
        this.passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALL_BACK_URL
        },
            (accessToken, refreshToken, profile, done) => {
                User.findOrCreate({ googleId: profile.id, picture: profile.photos[0].value, name: profile.displayName, email: profile.emails[0].value }, function (err, user) {
                    ioCon.broadcast("people",user)
                    return done(err, user);
                });
            }
        ));

        this.passport.serializeUser((user, done) => {
            done(null, user);
        });

        this.passport.deserializeUser((user, done) => {
            done(null, user);
        });

        app.get('/auth/google',
            passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email'] }));


        app.get('/auth/google/callback',
            passport.authenticate('google', { failureRedirect: '/login' }),
            function (req, res) {
                res.redirect(process.env.AUTH_UI_CALLBACK);
            });

            app.get('/logout', (req, res) => {
                req.logout();
                req.session = null;
                res.send({data:true});
            });
    }

    isUserAuthenticated(req, res, next) {
        if (req.user || req.method === 'OPTIONS') {
            next();
        } else {
            res.send('You must login!');
        }
    }

}
export default new Auth();