import jwt from "jsonwebtoken";


const adminAuth = async (req , res, next) => {
    try {
        
        const { token } = req.cookies;

        if(!token){
            return res.json({ success: false, message: "Not authorized" })
        }

        // decode the token
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // check if the token decode email matches the ADMIN email
        if(token_decode.email !== process.env.ADMIN_EMAIL){
            return res.json({ success: false, message: "Not authorized" })
        }

        next();

    } catch (error) {
        console.log(error)
        res.json({ success:false , message: error.message })
    }
}


export default adminAuth;