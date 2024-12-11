import mongoose from "mongoose";
import { Schema } from "mongoose";
 
const userSchema = new Schema({
username: {
    type: String,
    required: true,
    unique: true,
},
email: {
    type: String,
    required: true,
    unique: true
},
password: {
    type: String,
    required: true
},
img: {
    type: String,
    
},
country: {
    type: String,
    required: true
},
phone: {
    type: String,
    
},
desc: {
    type: String,
    
},
isSeller: {
    type: Boolean,
    default: false
    
}},
{
    timestamps:true,
}
)

export const UserModel = mongoose.model('User',userSchema);


