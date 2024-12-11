import mongoose from "mongoose";
import { Schema } from "mongoose";
 
const communicationSchema = new Schema({
id: {
    type: String,
    required: true
},
sellerId: {
    type: String,
    required: true
},
buyerId: {
    type: String,
    required: true
},
readBySeller: {
    type: Boolean,
    required:true,
},
readByBuyer: {
    type: Boolean,
    required:true,
},
lastMessage: {
    type: String,
    required:false,
}},
{
    timestamps:true,
}
)

const CommunicationModel = mongoose.model('Communication',communicationSchema);




module.exports({
    CommunicationModel
})