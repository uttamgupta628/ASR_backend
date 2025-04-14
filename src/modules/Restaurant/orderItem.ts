import mongoose,{Schema} from "mongoose";

const orderItemSchema = new Schema({
    item_id:{type:Schema.Types.ObjectId,ref:"MenuItem",required:true},
    order_id:{type:Schema.Types.ObjectId,ref:"Order",required:true},
    quantity:{type:Number,required:true},
    itemPrice:{type:Number,required:true}
})
export const OrderItem = mongoose.model("OrderItem", orderItemSchema);