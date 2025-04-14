import mongoose , {Schema} from "mongoose";


const OrderItemSchema = new Schema({
    order_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true},
    service_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true},
    quantity: {type: Number, required: true},
    price:{type: Number, required: true},
})

export const OrderItem = mongoose.model("OrderItem", OrderItemSchema);