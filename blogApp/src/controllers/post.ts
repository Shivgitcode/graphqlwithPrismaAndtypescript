import { PrismaClient } from "@prisma/client";
import { AllUser, Post } from "../typeDeclarations";
import { ApolloError } from "apollo-server-core";

const prisma = new PrismaClient();

export const createPost = async (
  _: any,
  { post }: { post: Post },
  context: any
) => {
  const { id } = context;
  if (context.id) {
    const newPost = await prisma.post.create({
      data: {
        ...post,
        userId: id,
      },
    });

    return newPost;
  } else {
    throw new ApolloError("Please login first");
  }
};

export const post = async (_: any, args: any, context: any) => {
  if (context.id) {
    const allPost = await prisma.post.findMany({
      include: {
        user: true,
      },
    });
    return allPost;
  } else {
    throw new ApolloError("Please login first ");
  }
};

export const posts = async (parent: AllUser) => {
  console.log(parent);
  const { id } = parent;
  const allPost = await prisma.post.findMany({
    where: {
      userId: id,
    },
  });

  return allPost;
};

export const onePost = async (_: any, args: { id: string }, context: any) => {
  if (context.id) {
    const findPost = await prisma.post.findFirst({
      where: {
        userId: context.id,
      },
    });
    console.log(findPost);
    if (findPost) {
      const foundPost = await prisma.post.findFirst({
        where: {
          AND: [{ id: args.id }, { userId: context.id }],
        },
      });

      return foundPost;
    } else {
      throw new ApolloError("you are not authorized to perform this action");
    }
  } else {
    throw new ApolloError("please login first");
  }
};

export const updatePost = async (
  _: any,
  args: { id: string; post: Post },
  context: any
) => {
  if (context.id) {
    const findPost = await prisma.post.findFirst({
      where: {
        userId: context.id,
      },
    });
    if (findPost) {
      await prisma.post.update({
        where: {
          id: args.id,
        },
        data: args.post,
      });
      return "post updated";
    } else {
      throw new ApolloError("you are not authorized to perform this action");
    }
  } else {
    throw new ApolloError("Please login first ");
  }
};
