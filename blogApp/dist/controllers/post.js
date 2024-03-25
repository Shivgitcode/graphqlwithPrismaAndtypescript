import { PrismaClient } from "@prisma/client";
import { ApolloError } from "apollo-server-core";
const prisma = new PrismaClient();
export const createPost = async (_, { post }, context) => {
    const { id } = context;
    if (context.id) {
        const newPost = await prisma.post.create({
            data: {
                ...post,
                userId: id,
            },
        });
        return newPost;
    }
    else {
        throw new ApolloError("Please login first");
    }
};
export const post = async (_, args, context) => {
    if (context.id) {
        const allPost = await prisma.post.findMany({
            include: {
                user: true,
            },
        });
        return allPost;
    }
    else {
        throw new ApolloError("Please login first ");
    }
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
export const onePost = async (_, args, context) => {
    if (context.id) {
        const foundPost = await prisma.post.findFirst({
            where: {
                AND: [{ id: args.id }, { userId: context.id }],
            },
        });
        return foundPost;
    }
    else {
        throw new ApolloError("please login first");
    }
};
export const updatePost = async (_, args, context) => {
    if (context.id) {
        await prisma.post.update({
            where: {
                id: args.id,
            },
            data: args.post,
        });
        return "post updated";
    }
    else {
        throw new ApolloError("Please login first ");
    }
};
