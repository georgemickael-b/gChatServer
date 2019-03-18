import Chat from "../models/chat.model"
import User from "../models/user.model"
import ioCon from '../config/io.config'
import ERROR_CONSTANTS from "../constants/error.constants"

class ChatController {
    constructor() {
    }
    async getChatOrInsert(req, res, next) {
        let userId = req.user._id;
        let { partnerId } = req.body
        try {
            let chat = await Chat.findOne({ members: { $all: [userId, partnerId] } }).populate({path: "members",model:"User", select: 'name picture' })
            if (chat)
                res.send(200, { data: chat })

            else {
                let chatToInsert = new Chat({
                    members: [userId, partnerId]
                })
                let chatInserted = await chatToInsert.save()
                await User.updateMany({ $or: [{ '_id': userId }, { '_id': partnerId }] }, { $push: { chats: chatInserted._id } })
                let chatResponse =await Chat.findOne({"_id" : chatInserted._id}).populate({path: "members",model:"User", select: 'name picture' })
                
                ioCon.emitToUser(userId,"chat",chatResponse)
                ioCon.emitToUser(partnerId,"chat",chatResponse)

                res.status(200).send({ data: chatResponse })
            }
        }
        catch (err) {
            return next(err)
        }
    }
    async getChatsOfUser(req, res, next) {
        let userId = req.user._id;
        try {
            let chats = await User.findOne({ "_id" : userId }).select('chats').populate({path : "chats", model:"Chat",populate:{path: "members",model:"User", select: 'name picture' }})
            if (chats)
                res.send(200, { data: chats })
            else {
                res.status(400).send({ error: ERROR_CONSTANTS.USER_NOT_FOUND })
            }
        }
        catch (err) {
            return next(err)
        }
    }
}

export default new ChatController();