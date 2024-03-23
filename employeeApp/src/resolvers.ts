import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  id?: string;
  employee: string;
  email: string;
  sex: string;
  experience: number;
}

interface Skill {
  name: string;
  description: string;
  userId: string;
}

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
    async createUser(_: never, { user }: { user: User }) {
      await prisma.user.create({
        data: user,
      });
      return "user created";
    },

    async createSkill(_: never, { skill }: { skill: Skill }) {
      await prisma.skill.create({
        data: skill,
      });
      return "skill created";
    },
  },
  Skill: {
    async user(parent: Skill) {
      console.log(parent);
      return prisma.user.findUnique({
        where: {
          id: parent.userId,
        },
      });
    },
  },
  User: {
    async skills(parent: User) {
      console.log;
      return await prisma.skill.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
  },
};
