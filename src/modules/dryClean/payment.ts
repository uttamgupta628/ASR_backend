import mongoose,{Schema} from "mongoose";

const PaymentSchema = new Schema({
    order_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true},
    amount: {type: Number, required: true},
    payment_method: {type: String, required: true},
    transection_status: {type: String, required: true},
    payment_date: {type: Date, default: Date.now},
})

export const Payment = mongoose.model("Payment", PaymentSchema);