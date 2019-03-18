import express from "express";
import * as bodyParser from "body-parser";
import morgan from "morgan"
import mongoose from "mongoose"
import cookieSession from 'cookie-session';
import Auth from "./config/auth.config";
import cors from 'cors';
import path from 'path'


//Routes Import
import userRoute from "./routes/user.route"
import messageRoute from "./routes/message.route"
import chatRoute from "./routes/chat.route"
import passport from "passport"
import http from 'http'
import SocketIO from 'socket.io'
import ioCon from "./config/io.config"
import '@babel/polyfill'

let ioSessions = {} // Should be a store like redis.

class App {
    app;
    io;
    server;
    constructor() {
        this.app = express();
        this.server = http.Server(app);
        this.io = SocketIO(this.server)
        this.initMiddleware();
        this.configAuth();
        this.configRoutes();
        this.configStaticFileServe();
        this.configDB();
        this.configIO();
        this.startServer();
    }
    initMiddleware() {
        this.app.use(morgan('dev'));
        this.app.use(cors({ credentials: true, origin: process.env.FRONT_END_URL }))
        this.app.use(cookieSession({
            maxAge: 30 * 24 * 60 * 60 * 1000, // One day in milliseconds
            keys: [process.env.COOKIE_SESSION_KEY]
        }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
    }
    configRoutes() {
        this.app.use("/users", userRoute);
        this.app.use("/user", userRoute);
        this.app.use("/message", messageRoute);
        this.app.use("/chat", chatRoute);
        this.app.use("/chats", chatRoute);
    }
    startServer() {
        this.app.listen(process.env.APP_PORT || process.env.PORT  || 3000);
        this.server.listen(3020);
    }
    configDB() {
        let DBURL = process.env.DB_URL
        mongoose.connect(DBURL, { useNewUrlParser: true });
        mongoose.Promise = global.Promise;
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
    configAuth() {
        Auth.configPassportGoogleAuth(passport, this.app);
    }
    configIO() {
        ioCon.config(this.io, ioSessions)
    }
    configStaticFileServe(){
        let allowedExt = ['.js','.ico','.css','.png','.jpg','.woff2','.woff','.ttf','.svg'];
        this.app.get('*', (req, res) => {
            if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
                res.sendFile(path.join(__dirname,`dist/chatapp-frontend/${req.url}`));
              }
            else
            res.sendFile(path.join(__dirname,'dist/chatapp-frontend/index.html'));
        });
    }
}

let app = new App();