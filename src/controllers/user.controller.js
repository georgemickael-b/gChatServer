import User from "../models/user.model"
import ERROR_CONSTANTS from "../constants/error.constants"

class UserController {
    constructor() {
    }
    async getUsers(req, res) {
        /* Returns all the public information about all the users */
        try {
            let users = await User.find({}).select("name picture")
            res.status(200).send({ data: users })
        }
        catch (err) {
            return next(err)
        }
    }
    async getChatsOfUser(req, res){
        let userId = req.user._id;
        try{
            let userChats = await User.find({"_id" : userId  }).populate('chats');
            res.status(200).send({ data: userChats })
        }catch(err){
            return next(err)
        }
    }
    async me(req,res){
        let userId = req.user._id;
        if(userId)
        res.status(200).send({ data: req.user })
        else
        res.status(400).send({error:ERROR_CONSTANTS.USER_NOT_FOUNDz});
    }
}

export default new UserController();