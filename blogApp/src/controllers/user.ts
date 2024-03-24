import { PrismaClient } from "@prisma/client";
import { AllPost, AllUser, User } from "../typeDeclarations.js";
import { hashing, isLoggedIn } from "../functions/hashing.js";
import { getToken } from "../functions/getToken.js";
import { ApolloError } from "apollo-server-express";

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

export const loginUser = async (_: any, args: AllUser, context: any) => {
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
  console.log("this is context", context.id);

  if (isUser) {
    const token = getToken(findUser.id);
    console.log(token);

    return token;
  } else {
    throw new Error("incorrect username or password");
  }
};

export const getCurrentUser = async (_: any, args: any, context: any) => {
  if (context.id) {
    return context.id;
  } else {
    throw new ApolloError("not authorized");
  }
};

export const user = async (parent: AllPost) => {
  const { userId } = parent;
  const findUser = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  return findUser;
};
