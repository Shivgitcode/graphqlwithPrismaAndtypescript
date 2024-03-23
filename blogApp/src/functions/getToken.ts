import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

const jwt = jsonwebtoken;

dotenv.config();

export const getToken = async (id: string) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET as string);
  return token;
};
