"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const resolvers = {
    Query: {
        async items() {
            const allItems = await prisma.cart.findMany({});
            return allItems;
        },
    },
    Mutation: {
        async addItem(_, { cart }) {
            await prisma.cart.create({
                data: cart,
            });
            return "item added";
        },
    },
};
module.exports = resolvers;
