import mongoose,{Schema} from "mongoose";

const NotificationSchema = new Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    message: {type: String, required: true},
    is_read: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now},
})

export const Notification = mongoose.model("Notification", NotificationSchema);