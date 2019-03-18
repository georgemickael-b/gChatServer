import express from "express"
import userController from "../controllers/user.controller"
import Auth from "../config/auth.config"

class UserRoute{
    router;
    constructor(){
        this.router = express.Router();
        this.initRoutes()
    }
    initRoutes(){
        this.router.get("/",Auth.isUserAuthenticated,userController.getUsers);
        this.router.post("/chats",Auth.isUserAuthenticated,(...args) =>userController.getChatsOfUser(...args));
        this.router.get("/me",Auth.isUserAuthenticated,(...args) => userController.me(...args));
    }
}

export default new UserRoute().router;