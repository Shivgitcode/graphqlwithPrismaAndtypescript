import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createPost = async (_, { post }) => {
    const newPost = await prisma.post.create({
        data: post,
    });
    return newPost;
};
