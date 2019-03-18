import * as mongoose from 'mongoose';
import mongooseFindOrCreate from 'mongoose-findorcreate';

const Schema = mongoose.Schema;

let ChatSchema = new Schema({
    members : [{type : Schema.ObjectId,required: true}]
});
ChatSchema.plugin(mongooseFindOrCreate);
export default  mongoose.model('Chat', ChatSchema);