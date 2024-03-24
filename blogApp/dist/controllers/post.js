import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const createPost = async (_, { post }) => {
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
export const posts = async (parent) => {
    console.log(parent);
    const { id } = parent;
    const allPost = await prisma.post.findMany({
        where: {
            userId: id,
        },
    });
    return allPost;
};
