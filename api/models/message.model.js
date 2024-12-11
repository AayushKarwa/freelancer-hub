import mongoose from "mongoose";
import { Schema } from "mongoose";
 
const messageSchema = new Schema({
communicationId: {
    type: String,
    required: true
},
userId: {
    type: String,
    required: true
},
desc: {
    type: String,
    required: true
}},
{
    timestamps:true,
}
)

export const MessageModel = mongoose.model('Message',messageSchema);




