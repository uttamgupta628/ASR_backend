import mongoose, {Schema} from "mongoose";

const LocationSchema = new Schema({
    Latitude: {type: String, required: true},
    longitude: {type: Number, required: true},
    Address_Label: {type: Number, required: true ,default: "Home"},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
})

export const Location = mongoose.model("Location", LocationSchema);