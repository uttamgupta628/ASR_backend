import mongoose,{Schema} from "mongoose";

const menuItemSchema = new Schema({
    ItemName:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    ImageURL:{type:String,required:true},
    category_id:{type:Schema.Types.ObjectId,ref:"MenuCategory",required:true},
    restaurant_id:{type:Schema.Types.ObjectId,ref:"Restaurant",required:true},
})

export const MenuItem = mongoose.model("MenuItem", menuItemSchema);