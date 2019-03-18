import * as mongoose from 'mongoose'
import mongooseFindOrCreate from 'mongoose-findorcreate'
const Schema = mongoose.Schema;

let MessageSchema = new Schema({
    sender      : {type : Schema.ObjectId, ref: 'User',  required: true },
    chat        : {type : Schema.ObjectId, ref: 'Chat',  required: true },
    message     : {type : String},
    sent        : {type : Boolean},
    createdAt   : {type : Date},
    deliveredTo : [{type : Schema.ObjectId, ref: 'User',  required: true }],
    readBy      : [{type : Schema.ObjectId, ref: 'User',  required: true }]

});
MessageSchema.plugin(mongooseFindOrCreate);
export default  mongoose.model('Message', MessageSchema);