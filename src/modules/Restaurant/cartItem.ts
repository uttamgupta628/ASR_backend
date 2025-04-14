import mongoose,{Schema} from "mongoose";

const cartItemSchema = new Schema({
    cart_id:{type:Schema.Types.ObjectId,ref:"Cart",required:true},
    item_id:{type:Schema.Types.ObjectId,ref:"MenuItem",required:true},
    quantity:{type:Number,required:true},
    ItemPrice:{type:Number,required:true}
})
export const CartItem = mongoose.model("CartItem", cartItemSchema);