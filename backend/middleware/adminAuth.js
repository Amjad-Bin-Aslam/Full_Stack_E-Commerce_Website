import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    // Read token from headers
    const token = req.headers.token;

    if (!token) {
      return res.json({ success: false, message: "Not authorized - No token" });
    }

    // Verify the token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Check if decoded email matches admin email
    if (token_decode.email !== process.env.ADMIN_EMAIL) {
      return res.json({ success: false, message: "Not authorized - Invalid admin" });
    }
    
    next();

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Not authorized - Invalid/Expired token" });
  }
};

export default adminAuth;
