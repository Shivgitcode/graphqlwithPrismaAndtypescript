import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const users = async (_, { user }) => {
    const allUsers = await prisma.user.create({
        data: user,
    });
    return allUsers;
};
