import { ApolloError, ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";

import express from "express";
import { verifyToken } from "./functions/getToken.js";

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,

  context: async ({ req, res }) => {
    const token = req.headers.authorization;
    if (!token) {
      return {};
    }
    const user = verifyToken(token as string);
    return user;
  },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

server.applyMiddleware({ app });

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4000 }, resolve)
);

console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
