import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const resolvers = {
    Query: {
        async users() {
            return await prisma.user.findMany({
                include: {
                    skills: true,
                },
            });
        },
        async skills() {
            return await prisma.skill.findMany({
                include: {
                    user: true,
                },
            });
        },
    },
    Mutation: {
        async createUser(_, { user }) {
            await prisma.user.create({
                data: user,
            });
            return "user created";
        },
        async createSkill(_, { skill }) {
            await prisma.skill.create({
                data: skill,
            });
            return "skill created";
        },
    },
    Skill: {
        async user(parent) {
            console.log(parent);
            return prisma.user.findUnique({
                where: {
                    id: parent.userId,
                },
            });
        },
    },
    User: {
        async skills(parent) {
            console.log;
            return await prisma.skill.findMany({
                where: {
                    userId: parent.id,
                },
            });
        },
    },
};
