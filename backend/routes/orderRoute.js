import express from 'express'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

import { placeOrder , 
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus } from '../controllers/orderConroller.js'

const orderRouter =  express.Router();

// for the admin panel
orderRouter.post('/list' , adminAuth , allOrders);
orderRouter.post('/status' , adminAuth , updateStatus);

// payment features
orderRouter.post('/place' , authUser , placeOrder)
orderRouter.post('/stripe' , authUser , placeOrderStripe)
orderRouter.post('/razorpay' , authUser , placeOrderRazorpay)

// user feature
orderRouter.post('/userorders' , authUser , userOrders)

export default orderRouter;