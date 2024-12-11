import mongoose from "mongoose";
import { Schema } from "mongoose";
 
const userSchema = new Schema({
username: {
    type: String,
    required: true
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
    required: true
},
country: {
    type: String,
    required: true
},
phone: {
    type: String,
    required: true
},
desc: {
    type: String,
    required: true
},
isSeller: {
    type: Boolean,
    default: false
    
}},
{
    timestamps:true,
}
)

const UserModel = mongoose.model('User',userSchema);




module.exports({
    UserModel
})