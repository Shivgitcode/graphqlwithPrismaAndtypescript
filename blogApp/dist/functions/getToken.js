import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
const jwt = jsonwebtoken;
dotenv.config();
export const getToken = async (id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET);
    return token;
};
export const verifyToken = async (token) => {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    return verified;
};
