import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Middleware to verify JWT token
export const jsonwebtoken = async (req, res, next) => {
    const Authorization = req.headers.authorization;
    if (!Authorization) {
        return res.status(400).json({ error: "Authorization Not Found" });
    }

    const Token = Authorization.split(" ")[1];

    if (!Token) {
        return res.status(400).json({ error: "Token Not Found" });
    }

    try {
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ error: "Server Misconfiguration" });
        }

        const Decoded = JWT.verify(Token, process.env.JWT_SECRET);
        req.User = Decoded;
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// Function to generate JWT token
export const Generate_Token = (user_data) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET not defined");
    }
    return JWT.sign(user_data, process.env.JWT_SECRET);
};
