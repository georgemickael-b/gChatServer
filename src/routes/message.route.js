import express from "express"
import messageController from "../controllers/message.controller"
import Auth from "../config/auth.config"

class MessageRoute{
    router;
    constructor(){
        this.router = express.Router();
        this.initRoutes()
    }
    initRoutes(){
        this.router.post("/send",Auth.isUserAuthenticated,(...args)=> messageController.saveMessage(...args));
        this.router.put("/seen",Auth.isUserAuthenticated,(...args)=> messageController.messageSeen(...args));
        this.router.post("/",Auth.isUserAuthenticated,(...args)=> messageController.getMessagesOfChat(...args));
    }
}

export default new MessageRoute().router;