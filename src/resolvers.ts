const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

type CartInput = {
  item: string;
  quantity: number;
};

const resolvers = {
  Query: {
    async items() {
      const allItems = await prisma.cart.findMany({});
      return allItems;
    },
  },
  Mutation: {
    async addItem(_: never, { cart }: { cart: CartInput }) {
      await prisma.cart.create({
        data: cart,
      });
      return "item added";
    },
  },
};

module.exports = resolvers;
