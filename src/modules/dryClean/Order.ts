import { stat } from "fs";
import mongoose,{Schema} from "mongoose";

const OrderSchema = new Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    pickup_address: {type: String, required: true},
    drop_address: {type: String, required: true},
    pickup_date: {type: Date, required: true},
    drop_date: {type: Date, required: true},
    TotalAmount: {type: Number, required: true},
    PyamentStatus: {type: String, required: true},
    QR_code: {type: String, required: true},
    status: {type: String, required: true, default: "Pending"},
})

export const Order = mongoose.model("Order", OrderSchema);