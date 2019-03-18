import * as mongoose from 'mongoose'
import mongooseFindOrCreate from 'mongoose-findorcreate';
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name    : {type: String,required: true},
    email   : {type: String,required: true},
    chats   : [{type:Schema.ObjectId, ref: 'Chat'}],
    googleId: {type: String},
    picture : {type:String},
    ioSessionId : {type:String}
});

UserSchema.plugin(mongooseFindOrCreate);
export default  mongoose.model('User', UserSchema);