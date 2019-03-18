import express from "express"
import chatController from "../controllers/chat.controller"
import Auth from "../config/auth.config"

class ChatRoute{
    router;
    constructor(){
        this.router = express.Router();
        this.initRoutes()
    }
    initRoutes(){
        this.router.post("/",Auth.isUserAuthenticated,(...args)=> chatController.getChatOrInsert(...args));
        this.router.get("/",Auth.isUserAuthenticated,(...args)=> chatController.getChatsOfUser(...args));
    }
}

export default new ChatRoute().router;