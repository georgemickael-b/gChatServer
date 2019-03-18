import Message from "../models/message.model"
import Chat from "../models/chat.model"
import ioCon from '../config/io.config'
import ERROR_CONSTANTS from "../constants/error.constants"

class MessageController {
    constructor() {
    }
    async saveMessage(req, res, next) {
        let { message, chatId } = req.body;
        let senderId = req.user._id;
        if (this.isValidMessageRequest(senderId, message, chatId)) {
            let messageInstance = new Message({
                sender: senderId,
                message: message,
                chat: chatId,
                createdAt: Date.now()
            });
            try {
                let message = await messageInstance.save()
                let chat = await Chat.findOne({"_id":chatId}).select("members")
                ioCon.emitToUser(senderId,"message",message)
                let receiver = chat.members.filter((m)=>m != senderId)[0]
                ioCon.emitToUser(receiver,"message",message)
                res.status(200).send({data:message})
            }
            catch (err) {
                return next(err);
            }
        }
    }

    async messageSeen(req, res, next) {
        let { messageId } = req.body;
        let userId = req.user._id;
        if (this.isValidMessageDeleiveredRequest(userId, messageId)) {
            try {
                let query = { "_id": messageId };
                let updateData = { $push: { readBy : userId } }
                let message = await Message.findOneAndUpdate(query, updateData, {new:true})
                if (!message)
                    return res.send(400, { error: ERROR_CONSTANTS.MESSAGE_NOT_FOUND });
                
                let chat = await Chat.findOne({"_id":message.chat}).select("members")
                chat.members.forEach(member => {
                    ioCon.emitToUser(member,"messageupdate",message)
                });
               
                res.status(200).send({ data: message })
            }
            catch (err) {
                return next(err);
            }
        }
    }

    async getMessagesOfChat(req, res, next){
        let { chatId } = req.body;
        try {
            let query = { chat: chatId};
            let messages = await Message.find(query,{},{
                sort:{
                    createdAt : 1
                }
            })
            res.status(200).send({data : messages})
        }
        catch (err) {
            return next(err);
        }
    }

    isValidMessageRequest(userId, message, chatId) {
        return userId && chatId && message && message.trim() != ""
    }

    isValidMessageDeleiveredRequest(receiverId, messageId) {
        return receiverId && messageId
    }
}

export default new MessageController();