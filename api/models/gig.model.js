import mongoose from "mongoose";
import { Schema } from "mongoose";

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
    GigModel
})