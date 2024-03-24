import { PrismaClient } from "@prisma/client";
import { AllUser, Post } from "../typeDeclarations";

const prisma = new PrismaClient();

export const createPost = async (_: any, { post }: { post: Post }) => {
  const newPost = await prisma.post.create({
    data: post,
  });

  return newPost;
};

export const post = async () => {
  const allPost = await prisma.post.findMany({
    include: {
      user: true,
    },
  });
  return allPost;
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
