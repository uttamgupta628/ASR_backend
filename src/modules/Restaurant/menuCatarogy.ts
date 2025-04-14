import mongoose,{Schema} from "mongoose";


const menuCategorySchema = new Schema({
    category_name:{type:String,required:true},
    restaurant_id:{type:Schema.Types.ObjectId,ref:"Restaurant",required:true},
})

export const MenuCategory = mongoose.model("MenuCategory", menuCategorySchema);