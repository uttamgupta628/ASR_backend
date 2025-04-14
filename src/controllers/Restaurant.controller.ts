import asyncHandler from "../utils/utils/asyncHandler";
import { Request, Response } from "express";
import { ApiError } from "../utils/utils/ApiError";
import { ApiResponse } from "../utils/utils/ApiResponse";
import { Restaurant } from "../modules/Restaurant/RegisterRestaurant";
import { User } from "../modules/user/User";
import { Cart } from "../modules/Restaurant/cart";
import { Order } from "../modules/Restaurant/order";
import { MenuCategory } from "../modules/Restaurant/menuCatarogy";
import { MenuItem } from "../modules/Restaurant/menuItem";
import { CartItem } from "../modules/Restaurant/cartItem";
import { OrderItem } from "../modules/Restaurant/orderItem";

const createRestaurant = asyncHandler(async (req: Request, res: Response) => {
    const { Restaurant_name, location, Cuisine_type, Rating, ImageURL } = req.body;
    if(!Restaurant_name || !location || !Cuisine_type || !Rating || !ImageURL) {
        throw new ApiError(400, "Please provide all required fields")}
    const restaurantExists = await Restaurant.findOne({ Restaurant_name });
    if (restaurantExists) {
        throw new ApiError(400, "Restaurant already exists");
    }
    const restaurant = await Restaurant.create({
        Restaurant_name,
        location,
        Cuisine_type,
        Rating,
        ImageURL
    });
    if (!restaurant) {
        throw new ApiError(400, "Restaurant not created");
    }
    return res.status(201).json(new ApiResponse(201,restaurant,"Restaurant created successfully"));
});

const createUser = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, phone, address, password } = req.body;
    if(!name || !email || !phone || !address || !password) {
        throw new ApiError(400, "Please provide all required fields")}
    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new ApiError(400, "User already exists");
    }
    const user = await User.create({
        name,
        email,
        phone,
        address,
        password
    });
    if (!user) {
        throw new ApiError(400, "User not created");
    }
    return res.status(201).json(new ApiResponse(201,user,"User created successfully"));
})

const createCart = asyncHandler(async (req: Request, res: Response) => {
    const { user_id, totalPrice } = req.body;
    if(!user_id || !totalPrice) {
        throw new ApiError(400, "Please provide all required fields")}
    const userExists = await User.findById(user_id);
    if (!userExists) {
        throw new ApiError(400, "User not found");
    }
    const existingCart = await Cart.findOne({ user_id });
    if (existingCart) {
        throw new ApiError(400, "User already has a cart");
    }
    const cart = await Cart.create({
        user_id,
        totalPrice
    });
    if (!cart) {
        throw new ApiError(400, "Cart not created");
    }
    return res.status(201).json(new ApiResponse(201,cart,"Cart created successfully"));
})

const placeOrder = asyncHandler(async (req: Request, res: Response) => {
    const { user_id, restaurant_id, totalamount,orderStatus } = req.body;
    if(!user_id || !restaurant_id || !totalamount|| !orderStatus) {
        throw new ApiError(400, "Please provide all required fields")}
    const userExists = await User.findById(user_id);
    if (!userExists) {
        throw new ApiError(400, "User not found");
    }
    const restaurantExists = await Restaurant.findById(restaurant_id);
    if (!restaurantExists) {
        throw new ApiError(400, "Restaurant not found");
    }
    const order = await Order.create({
        user_id,
        restaurant_id,
        totalamount,
        orderStatus
    });
    if (!order) {
        throw new ApiError(400, "Order not placed");
    }
    return res.status(201).json(new ApiResponse(201,order,"Order placed successfully"));
})

const createMenuCategory = asyncHandler(async (req: Request, res: Response) => {
    const { category_name, restaurant_id } = req.body;
    if(!category_name || !restaurant_id) {  
        throw new ApiError(400, "Please provide all required fields")}
    const menu= await MenuCategory.create({
        category_name,
        restaurant_id
    });
    if (!menu) {
        throw new ApiError(400, "Menu not created");
    }
    return res.status(201).json(new ApiResponse(201,menu,"Menu created successfully"));
})

const createMenuItem = asyncHandler(async (req: Request, res: Response) => {
    const { ItemName, price, description, ImageURL, category_id, restaurant_id } = req.body;
    if(!ItemName || !price || !description || !ImageURL || !category_id || !restaurant_id) {
        throw new ApiError(400, "Please provide all required fields")}
    const menuItem = await MenuItem.create({
        ItemName,
        price,
        description,
        ImageURL,
        category_id,
        restaurant_id
    });
    if (!menuItem) {
        throw new ApiError(400, "Menu item not created");
    }
    return res.status(201).json(new ApiResponse(201,menuItem,"Menu item created successfully"));
})

const createCartItem = asyncHandler(async (req: Request, res: Response) => {
    const { cart_id, item_id, quantity } = req.body;
    if(!cart_id || !item_id || !quantity) {
        throw new ApiError(400, "Please provide all required fields")}
    const cartExists = await Cart.findById(cart_id);    
    if (!cartExists) {
        throw new ApiError(400, "Cart not found");
    }
    const itemExists = await MenuItem.findById(item_id);
    if (!itemExists) {
        throw new ApiError(400, "Menu item not found");
    }
    const cartItem = await CartItem.create({
        cart_id,
        item_id,
        quantity
    });
    if (!cartItem) {
        throw new ApiError(400, "Cart item not created");
    }
    return res.status(201).json(new ApiResponse(201,cartItem,"Cart item created successfully"));
})

const createOrderItem = asyncHandler(async (req: Request, res: Response) => {
    const { item_id, order_id, quantity, itemPrice } = req.body;
    if(!item_id || !order_id || !quantity || !itemPrice) {
        throw new ApiError(400, "Please provide all required fields")}
    const orderExists = await Order.findById(order_id);
    if (!orderExists) {
        throw new ApiError(400, "Order not found");
    }
    const itemExists = await MenuItem.findById(item_id);
    if (!itemExists) {
        throw new ApiError(400, "Menu item not found");
    }
    const orderItem = await OrderItem.create({
        item_id,
        order_id,
        quantity,
        itemPrice
    });
    if (!orderItem) {
        throw new ApiError(400, "Order item not created");
    }
    return res.status(201).json(new ApiResponse(201,orderItem,"Order item created successfully"));
})

export {
    createRestaurant,
    createUser,
    createCart,
    placeOrder,
    createMenuCategory,
    createMenuItem,
    createCartItem,
    createOrderItem
}