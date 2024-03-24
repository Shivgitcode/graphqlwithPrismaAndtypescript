import { PrismaClient } from "@prisma/client";
import { Post } from "../typeDeclarations";

const prisma = new PrismaClient();

export const createPost = async (_: any, { post }: { post: Post }) => {
  const newPost = await prisma.post.create({
    data: post,
  });

  return newPost;
};
