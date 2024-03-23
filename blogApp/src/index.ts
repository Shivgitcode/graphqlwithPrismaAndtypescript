import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import express from "express";

const app = express();

app.use(cookieParser());
const corsOptions = {
  origin: ["http://localhost:3000", "https://studio.apollographql.com"],
  credentials: true, // Allow credentials (cookies)
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

const server = new ApolloServer({
  typeDefs,
  resolvers,

  context: ({ req, res }) => ({ req, res }),
});

await server.start();

// app.use(cors(corsOption));

server.applyMiddleware({ app, cors: false });

app.listen("3000", () => {
  console.log("listening on port 3000");
});
