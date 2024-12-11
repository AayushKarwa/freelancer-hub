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


const gigSchema = new Schema({
    userId:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    totalStars:{
        type: Number,
        default: 0,
    },
    starNo:{
        type: Number,
        default: 0,
    },
    category:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    coverImg:{
        type: String,
        required: true,
    },
    images:{
        type: [String],
        required: false,
    },
    shortTitle:{
        type: String,
        required: true,
    },
    shortDesc:{
        type: String,
        required: true,
    },
    deliveryTime:{
        type: String,
        required: true,
    },
    revisionNo:{
        type: Number,
        required: true,
    },
    features:{
        type: [String],
        required: false,
    },
    sales:{
        type: Number,
        default: 0,
    },
},
{
    timestamps:true,
})


const GigModel = mongoose.model('Gig',gigSchema);

module.exports({
    UserModel,
    GigModel
})