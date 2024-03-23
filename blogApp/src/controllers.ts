import { PrismaClient } from "@prisma/client";
import { AllUser, User } from "./typeDeclarations.js";
import { hashing, isLoggedIn } from "./functions/hashing.js";
import { getToken } from "./functions/getToken.js";

const prisma = new PrismaClient();

export const users = async (_: any, args: any) => {
  console.log(args);
  const allUsers = await prisma.user.findMany({});
  return allUsers;
};

export const registerUser = async (_: any, args: AllUser) => {
  console.log(args);
  const { password } = args.user;
  const hashPass = await hashing(password);
  const newUser = await prisma.user.create({
    data: {
      ...args.user,
      password: hashPass,
    },
  });

  return "user created";
};

export const loginUser = async (_: any, args: AllUser, { res }: any) => {
  const { username, password } = args.user;
  const findUser = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  if (!findUser) {
    throw new Error("user not found");
  }
  const isUser = await isLoggedIn(findUser.password, password);
  console.log(isUser);

  if (isUser) {
    const token = getToken(password);
    res.cookie("jwt", token, { httpOnly: true });
    return token;
  } else {
    throw new Error("incorrect username or password");
  }
};
