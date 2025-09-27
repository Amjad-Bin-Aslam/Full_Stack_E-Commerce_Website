import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
import Stripe from 'stripe'

// Global variables
const currency = '$'
const deliveryCharge = 10

// Gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY)

// Placing orders using COD method
const placeOrder =  async (req , res) => {
    try {
        
        const { userId , items , amount , address } =  req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment: false,
            date: Date.now(),
        };

        const newOrder =  new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId , {cartData: {}});

        res.json({ success: true , message: 'Order placed.' });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}




// Placing orders using COD method
const placeOrderStripe =  async (req , res) => {
  

}




// Placing orders using COD method
const placeOrderRazorpay =  async (req , res) => {
    
}




// All orders data for admin panel
const allOrders = async (req , res) => {
    try {
        
        const orders =  await orderModel.find({})
        res.json({ success: true , orders })

    } catch (error) {
        console.log(error)
        res.json({ success: false , message: error.message })
    }
}



// user order for front End
const userOrders =  async (req , res) => {
    try {
        
        const {userId} = req.body

        const orders = await orderModel.find({userId});
        res.json({ success: true , orders})

    } catch (error) {
        console.log(error)
        res.json({ success: false , message: error.message })
    }
}




// update Order status from admin panel
const updateStatus =  async (req , res) => {
        try {
            
            const { orderId  , status} = req.body;

            await orderModel.findByIdAndUpdate(orderId , {status})

            res.json({ success: true , message: 'Status Updated' })

        } catch (error) {
            console.log(error)
            res.json({ success: false , message: error.message })
        }
}



export {
    placeOrder , 
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus
}