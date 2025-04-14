import mongoose,{Schema} from "mongoose";


const cartSchema = new Schema({
    user_id:{type:Schema.Types.ObjectId,ref:"User",required:true},
    totalPrice:{type:Number,required:true}
},
{timestamps:true}
)

export const Cart = mongoose.model("Cart", cartSchema);