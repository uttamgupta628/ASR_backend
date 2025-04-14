import mongoose,{Schema} from "mongoose";


const restaurantSchema = new Schema({
    Restaurant_name:{type:String,required:true},
    location:{type:String,required:true},
    Cuisine_type:{type:String,required:true},
    Rating:{type:Number,required:true},
    ImageURL:{type:Number,required:true}
})


export const Restaurant = mongoose.model("Restaurant", restaurantSchema);