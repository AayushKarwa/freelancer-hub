import mongoose from "mongoose";
import { Schema } from "mongoose";
 
const reviewSchema = new Schema({
gigId: {
    type: String,
    required: true
},
userId: {
    type: String,
    required:true
},
star: {
    type: Number,
    required: true,
    enum:[1,2,3,4,5]
},
desc: {
    type: String,
    required:true,
}},
{
    timestamps:true,
}
)

export const ReviewModel = mongoose.model('Review',reviewSchema);




