import mongoose,{Schema} from "mongoose";


const orderSchema = new Schema({
    user_id:{type:Schema.Types.ObjectId,ref:"User",required:true},
    restaurant_id:{type:Schema.Types.ObjectId,ref:"Restaurant",required:true},
    totalamount:{type:Number,required:true},
    orderStatus:{type:String,required:true,default:"Pending"},
    orderDate:{type:Date,default:Date.now},
})

export const Order = mongoose.model("Order", orderSchema);