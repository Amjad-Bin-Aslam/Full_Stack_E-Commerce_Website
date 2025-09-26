import userModel from '../models/userModel.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


// route for user registeration
const registerUser = async (req , res) => {

    try { 
        const { name , email , password } = req.body;

        if(!name || !email || !password){
        return res.status(400).json({ success: false , message: "Missing Details" })
        };

        // check user already exist or not
        const exist = await userModel.findOne({email});
        if(exist){
            return res.json({success: false , message: 'User already exist.'})
        }

        // validate email and password
        if(!validator.isEmail(email)){
            return res.json({success: false , message: 'Please enter  a valid email.'})
        }
        if(password.length < 8){
             return res.json({success: false , message: 'Please enter a strong password.'}) 
        } 

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        })
        const user = await newUser.save();
        
        const token = jwt.sign({id: user._id} , process.env.JWT_SECRET , {expiresIn: '7d'})
        return res.json({success: true , token})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}



// route for user login
const loginUser =  async (req , res) => {

    try {
        const { email , password } = req.body;

        if(!email || !password){
        return res.status(400).json({ success: false, message: "Email and Password required" })
    }

        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false , message: "User doesn't exit."})
        }

        const isMatch = await bcrypt.compare(password , user.password)

        if(!isMatch){
            res.json({success:false , message: "Invalid credentials"})
        }

        const token = jwt.sign({id:user._id} , process.env.JWT_SECRET , {expiresIn: '7d'})

        res.json({success: true ,token , message:'User logged in successfully'})


    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}



// Admin login
const adminLogin = async (req , res) => {
        try {
            
            const { email , password } = req.body;

            if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' }); 
            
            return res.json({ success: true, message: "Login successful" , token });
        } else {
            return res.json({ success: false, message: "Invalid credentials!" });
        }

        } catch (error) {
            console.log(error)
            res.json({ success: false, message: error.message })
        }
} 



export { loginUser , registerUser , adminLogin};
