import mongoose ,{Schema} from "mongoose";

const ServiceSchema = new Schema({
    ServiceName:{type: String, required: true},
    Price_per_item:{type: Number, required: true},
    Estimetaed_delivery_time:{type: String, required: true},
})

export const Service = mongoose.model("Service", ServiceSchema);