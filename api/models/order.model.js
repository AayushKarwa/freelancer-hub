import mongoose from "mongoose";
import { Schema } from "mongoose";
 
const orderSchema = new Schema({
gigId: {
    type: String,
    required: true
},
img: {
    type: String,
    required:false
},
title: {
    type: String,
    required: true,
    
},
price: {
    type: Number,
    required:true,
},
sellerId: {
    type: String,
    required:true,
},
buyerId: {
    type: String,
    required:true,
},
isCompleted: {
    type: Boolean,
    required:true,
},
payment_intent: {
    type: String,
    required:true,
}},
{
    timestamps:true,
}
)

export const OrderModel = mongoose.model('Order',orderSchema);




