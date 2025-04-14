import asyncHandler from "../utils/utils/asyncHandler";
import { ApiError } from "../utils/utils/ApiError";
import { Request, Response } from "express";
import { ApiResponse } from "../utils/utils/ApiResponse";
import { Order } from "../modules/Restaurant/order";
import { Service } from "../modules/dryClean/service";
import { OrderItem } from "../modules/dryClean/orderitem";
import { Location } from "../modules/dryClean/location";
import { Notification } from "../modules/dryClean/notification";
import { Payment } from "../modules/dryClean/payment";

const RegisterDryCleanOrders = asyncHandler(async (req: Request, res: Response) => {
    const {user_id, pickup_address, drop_address, pickup_date, drop_date, TotalAmount, PaymentStatus, QR_code} = req.body;
    if(!user_id || !pickup_address || !drop_address || !pickup_date || !drop_date || !TotalAmount || !PaymentStatus || !QR_code) {
        throw new ApiError( 400, "Please provide all required fields");
    }
    const order = await Order.create({  user_id, pickup_address, drop_address, pickup_date, drop_date, TotalAmount, PaymentStatus, QR_code});
    return res.status(201).json(new ApiResponse(201, order,"Order registered successfully"));
})


const RegisterService = asyncHandler(async (req: Request, res: Response) => {
    const {service_name, Price_per_item,Estimetaed_delivery_time} = req.body;
    if(!service_name || !Price_per_item|| !Estimetaed_delivery_time) {
        throw new ApiError( 400, "Please provide all required fields");
    }
    const service = await Service.create({service_name, Price_per_item,Estimetaed_delivery_time});
    if(!service) {
        throw new ApiError( 400, "Service registration failed");
    }
    return res.status(201).json(new ApiResponse(201, service,"Service registered successfully"));
})

 const RegisterOrderItem = asyncHandler(async (req: Request, res: Response) => {
    const {order_id, service_id, quantity, price} = req.body;
    if(!order_id || !service_id || !quantity || !price) {
        throw new ApiError( 400, "Please provide all required fields");
    }
    const orderItem = await OrderItem.create({order_id, service_id, quantity, price});
    if(!orderItem) {
        throw new ApiError( 400, "Order item registration failed");
    }
    return res.status(201).json(new ApiResponse(201, orderItem,"Order item registered successfully"));
 })

const RegisterLocation = asyncHandler(async (req: Request, res: Response) => {
    const {Latitude, longitude, Address_Label, user_id} = req.body;
    if(!Latitude || !longitude || !Address_Label || !user_id) {
        throw new ApiError( 400, "Please provide all required fields");
    }
    const location = await Location.create({Latitude, longitude, Address_Label, user_id});
    if(!location) {
        throw new ApiError( 400, "Location registration failed");
    }
    return res.status(201).json(new ApiResponse(201, location,"Location registered successfully"));
})


const RegisterNotification = asyncHandler(async (req: Request, res: Response) => {
    const {user_id, message, is_read} = req.body;
    if(!user_id || !message || is_read) {
        throw new ApiError( 400, "Please provide all required fields");
    }
    const notification = await Notification.create({user_id, message ,created_at: new Date(),is_read: false});
    if(!notification) {
        throw new ApiError( 400, "Notification registration failed");
    }
    return res.status(201).json(new ApiResponse(201, notification,"Notification registered successfully"));
})

const RegisterPayment = asyncHandler(async (req: Request, res: Response) => {
    const {order_id, amount, payment_method, transection_status} = req.body;
    if(!order_id || !amount || !payment_method || !transection_status) {
        throw new ApiError( 400, "Please provide all required fields");
    }
    const payment = await Payment.create({order_id, amount, payment_method, transection_status});
    if(!payment) {
        throw new ApiError( 400, "Payment registration failed");
    }
    return res.status(201).json(new ApiResponse(201, payment,"Payment registered successfully"));
})

export{
    RegisterDryCleanOrders,
    RegisterService,
    RegisterOrderItem,
    RegisterLocation,
    RegisterNotification,
    RegisterPayment
}